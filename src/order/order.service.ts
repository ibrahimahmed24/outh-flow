import {
  Injectable,
  BadRequestException,
  NotFoundException,
  ConflictException,
  Logger,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderStatus } from '@prisma/client';

@Injectable()
export class OrderService {
  private logger = new Logger(OrderService.name);

  constructor(private readonly prisma: PrismaService) {}

  async createOrderFromCart(userId: string) {
    const cart = await this.prisma.cart.findUnique({
      where: { userId },
      include: { items: { include: { product: true } } },
    });

    if (!cart || cart.items.length === 0) {
      throw new BadRequestException('Your cart is empty');
    }

    const pending = await this.prisma.order.findFirst({
      where: { userId, status: OrderStatus.PENDING },
    });
    if (pending) {
      throw new ConflictException(
        'You already have a pending order. Complete it first.',
      );
    }
    const productId = cart.items.map((i) => i.productId);

    const products = await this.prisma.product.findMany({
      where: { id: { in: productId } },
    });

    let totalPrice = 0;

    for (const item of cart.items) {
      const product = products.find((p) => p.id === item.productId);
      if (!product) {
        throw new NotFoundException(
          `Product with ID ${item.productId} not found`,
        );
      }
      if (item.quantity > product.stock) {
        throw new BadRequestException(
          `Insufficient stock for product ${product.name}`,
        );
      }
      totalPrice += product.price * item.quantity;
    }
    const order = await this.prisma.order.create({
      data: {
        userId,
        totalPrice,
        price: totalPrice,
        status: OrderStatus.PENDING,
      },
    });

    for (const item of cart.items) {
      const product = products.find((p) => p.id === item.productId);
      if (!product) {
        throw new NotFoundException(
          `Product with ID ${item.productId} not found`,
        );
      }

      await this.prisma.orderItem.create({
        data: {
          orderId: order.id,
          productId: item.productId,
          quantity: item.quantity,
          price: product.price,
        },
      });

      await this.prisma.product.update({
        where: { id: item.productId },
        data: { stock: product.stock - item.quantity },
      });
    }

    await this.prisma.cartItem.deleteMany({ where: { cartId: cart.id } });
    return order;
  }

  async getOrders(userId: string) {
    return this.prisma.order.findMany({
      where: { userId },
      include: {
        items: { include: { product: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getUserOrders(userId: string) {
    return this.prisma.order.findMany({
      where: { userId },
      include: {
        items: { include: { product: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getOrderById(userId: string, orderId: string) {
    const order = await this.prisma.order.findFirst({
      where: { id: orderId, userId },
      include: { items: { include: { product: true } } },
    });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    return order;
  }

  async getMyOrders(userId: string) {
    const orders = await this.prisma.order.findMany({
      where: { userId },
      include: {
        items: { include: { product: true } },
      },
      orderBy: { createdAt: 'desc' },
    });

    return orders;
  }

  async cancelOrder(userId: string, orderId: string) {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      include: { items: true },
    });

    if (!order || order.userId !== userId) {
      throw new NotFoundException('Order not found');
    }
    if (order.status !== OrderStatus.PENDING) {
      throw new BadRequestException('Only pending orders can be cancelled');
    }

    for (const item of order.items) {
      await this.prisma.product.update({
        where: { id: item.productId },
        data: { stock: { increment: item.quantity } },
      });
    }
    const updated = await this.prisma.order.update({
      where: { id: orderId },
      data: { status: OrderStatus.CANCELLED },
    });
    return updated;
  }
}
