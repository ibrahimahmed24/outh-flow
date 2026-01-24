import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { JwtAuthGuard } from 'src/gards/jwt-aoth.gards.guard';
import { GetUser } from 'src/decorators/GetUser.Decorator';

@UseGuards(JwtAuthGuard)
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  createOrder(@GetUser('id') userId: string) {
    return this.orderService.createOrderFromCart(userId);
  }

  @Get()
  getUserOrders(@GetUser('id') userId: string) {
    return this.orderService.getUserOrders(userId);
  }

  @Get('orderuers')
  async getOrders(@GetUser('id') userId: string) {
    return this.orderService.getOrders(userId);
  }

  @Get(':orderId')
  getOrderById(
    @GetUser('id') userId: string,
    @Param('orderId') orderId: string,
  ) {
    return this.orderService.getOrderById(userId, orderId);
  }

  @Delete(':orderId')
  cancelOrder(
    @GetUser('id') userId: string,
    @Param('orderId') orderId: string,
  ) {
    return this.orderService.cancelOrder(userId, orderId);
  }
}
