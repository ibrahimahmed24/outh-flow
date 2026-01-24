import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
  Res,
  Headers,
  HttpCode,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { GetUser } from 'src/decorators/GetUser.Decorator';
import { JwtAuthGuard } from 'src/gards/jwt-aoth.gards.guard';
import { Request, Response } from 'express';

import { RefundDto } from './dto/refund-payment.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/gards/roles.guard';

@Controller('payments')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Post('checkout')
  async createCheckout(
    @Body() dto: CreatePaymentDto,
    @GetUser('id') userId: string,
  ) {
    return this.paymentsService.createCheckoutSession(dto, userId);
  }
  @Post('webhook')
  @HttpCode(200)
  async handleStripeWebhook(
    @Req() req: Request,
    @Res() res: Response,
    @Headers('stripe-signature') signature: string,
  ) {
    await this.paymentsService.handleWebhook(req.body, signature);
    res.send({ received: true });
  }

  @Roles('ADMIN')
  @Post('refund')
  async refundPayment(@Body() dto: RefundDto, @GetUser('id') userId: string) {
    const refund = await this.paymentsService.refundOrder(dto, userId);
    return { success: true, refund };
  }
}
