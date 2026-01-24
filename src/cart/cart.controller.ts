import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { JwtAuthGuard } from 'src/gards/jwt-aoth.gards.guard';
import { GetUser } from 'src/decorators/GetUser.Decorator';
import { UpdateCartItemDto } from './dto/update-quantity.dto';

@UseGuards(JwtAuthGuard)
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  // استرجاع كل عناصر السلة@Post('add')
  @Post('add')
  @HttpCode(HttpStatus.OK)
  addToCart(@GetUser('id') userId: string, @Body() dto: AddToCartDto) {
    return this.cartService.addCart(dto, userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getCart(@GetUser('id') userId: string) {
    return this.cartService.getCart(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('item/:itemId')
  updateQuantity(
    @GetUser('id') userId: string,
    @Param('itemId') itemId: string,
    @Body('quantity') quantity: number,
  ) {
    return this.cartService.updateQuantity(userId, itemId, quantity);
  }
  @UseGuards(JwtAuthGuard)
  @Delete('item/:itemId')
  removeItem(@GetUser('id') userId: string, @Param('itemId') itemId: string) {
    return this.cartService.removeItem(userId, itemId);
  }
  @UseGuards(JwtAuthGuard)
  @Delete('clear')
  clearCart(@GetUser('id') userId: string) {
    return this.cartService.clearCart(userId);
  }
}
