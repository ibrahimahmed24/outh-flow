import { Module } from '@nestjs/common';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderService } from 'src/order/order.service';
// WebhookService

@Module({
  imports: [],
  controllers: [PaymentsController],
  providers: [PaymentsService, PrismaService, ConfigService, OrderService],
})
export class PaymentsModule {}
