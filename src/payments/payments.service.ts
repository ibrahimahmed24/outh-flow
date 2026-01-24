import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import Stripe from 'stripe';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { OrderStatus, PaymentStatus } from '@prisma/client';
import { RefundDto } from './dto/refund-payment.dto';

@Injectable()
export class PaymentsService {
  private stripe: Stripe;
  private readonly logger = new Logger(PaymentsService.name);

  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
  ) {
    const stripeApiKey = this.config.get<string>('STRIPE_SECRET_KEY');
    if (!stripeApiKey) {
      this.logger.error('Stripe API key is not configured');
      throw new Error('Stripe API key is not configured');
    }
    this.stripe = new Stripe(stripeApiKey, {
      apiVersion: '2025-11-17.clover',
    });
  }
  async createCheckoutSession(dto: CreatePaymentDto, userId: string) {
    const { orderId } = dto;
    const order = await this.prisma.order.findFirst({
      where: { id: orderId, userId, status: OrderStatus.PENDING },
      include: {
        user: true,
        items: {
          include: { product: true },
        },
      },
    });

    if (!order) {
      throw new BadRequestException('Order not found');
    }

    const line_items = order.items.map((item) => ({
      price_data: {
        currency: 'usd',
        unit_amount: item.price * 100,
        product_data: {
          name: item.product.name,
        },
      },
      quantity: item.quantity,
    }));

    const session = await this.stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      customer_email: order.user.email,
      line_items: line_items,
      metadata: {
        orderId: order.id,
        userId,
      },

      success_url: `${process.env.CLIENT_URL}/payment/success?orderId=${orderId}`,
      cancel_url: `${process.env.CLIENT_URL}/payment/cancel?orderId=${orderId}`,
    });

    return {
      checkoutUrl: session.url,
      sessionId: session.id,
    };
  }

  async handleWebhook(payload: Buffer, signature: string) {
    const endpointSecret = this.config.get<string>('STRIPE_WEBHOOK_SECRET');
    if (!endpointSecret) {
      this.logger.error('Stripe webhook secret is not configured');
      throw new Error('Stripe webhook secret is not configured');
    }

    let event: Stripe.Event;

    try {
      event = this.stripe.webhooks.constructEvent(
        payload,
        signature,
        endpointSecret,
      );
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      throw new BadRequestException(`Webhook Error: ${errorMessage}`);
    }

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;

        if (session.payment_status !== 'paid') break;

        const orderId = session.metadata?.orderId;
        const userId = session.metadata?.userId;
        if (!orderId || !userId) break;

        const order = await this.prisma.order.findUnique({
          where: { id: orderId, userId },
        });
        if (!order || order.status !== OrderStatus.PENDING) break;

        await this.prisma.payment.create({
          data: {
            orderId,
            userId,
            amount: session.amount_total!,
            currency: session.currency!,
            status: PaymentStatus.PAID,
            stripeSessionId: session.id,
            paymentIntentId: session.payment_intent as string,
          },
        });

        await this.prisma.order.update({
          where: { id: orderId },
          data: { status: OrderStatus.PAID },
        });

        break;
      }

      case 'checkout.session.expired': {
        const session = event.data.object;
        const orderId = session.metadata?.orderId;
        if (!orderId) break;

        await this.prisma.order.updateMany({
          where: { id: orderId, status: OrderStatus.PENDING },
          data: { status: OrderStatus.EXPIRED },
        });
        break;
      }

      case 'payment_intent.payment_failed': {
        const intent = event.data.object;

        const payment = await this.prisma.payment.findUnique({
          where: { paymentIntentId: intent.id },
        });
        if (!payment) break;

        await this.prisma.payment.update({
          where: { id: payment.id },
          data: {
            status: PaymentStatus.FAILED,
            failureReason:
              intent.last_payment_error?.message || 'Unknown payment error',
          },
        });

        await this.prisma.order.updateMany({
          where: { id: payment.orderId, status: OrderStatus.PENDING },
          data: { status: OrderStatus.FAILED },
        });
        break;
      }
    }

    return { received: true };
  }

  async refundOrder(dto: RefundDto, userId: string) {
    const { orderId } = dto;
    const payment = await this.prisma.payment.findFirst({
      where: { orderId, userId, status: PaymentStatus.PAID },
    });

    if (!payment) {
      throw new BadRequestException('No paid payment found for this order');
    }
    try {
      const refund = await this.stripe.refunds.create({
        payment_intent: payment.paymentIntentId,
      });

      await this.prisma.payment.update({
        where: { id: payment.id },
        data: {
          status: PaymentStatus.REFUNDED,
          refundId: refund.id,
        },
      });

      await this.prisma.order.update({
        where: { id: orderId },
        data: { status: OrderStatus.REFUNDED },
      });

      this.logger.log(`Order ${orderId} refunded successfully`);
      return { success: true };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      this.logger.error(`Failed to refund order ${orderId}: ${errorMessage} `);
      throw new BadRequestException(`Failed to refund order: ${errorMessage}`);
    }
  }
}
