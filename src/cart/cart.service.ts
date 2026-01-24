import {
  Injectable,
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
  ConflictException,
  Logger,
  InternalServerErrorException,
  HttpException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartItemDto } from './dto/update-quantity.dto';

@Injectable()
export class CartService {
  private readonly logger = new Logger(CartService.name);

  constructor(private readonly prisma: PrismaService) {}

  async addCart(dto: AddToCartDto, userId: string) {
    try {
      const { productId, quantity } = dto;

      const product = await this.prisma.product.findUnique({
        where: { id: productId },
      });
      if (!product) throw new NotFoundException('Product not found');

      if (quantity > product.stock) {
        throw new BadRequestException('Invalid quantity');
      }

      let cart = await this.prisma.cart.findUnique({ where: { userId } });
      if (!cart) {
        cart = await this.prisma.cart.create({ data: { userId } });
      }

      const existingItem = await this.prisma.cartItem.findFirst({
        where: {
          cartId: cart.id,
          productId,
        },
      });
      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;

        // check stock again بعد الزيادة
        if (newQuantity > product.stock) {
          throw new BadRequestException('Not enough stock after update');
        }

        return this.prisma.cartItem.update({
          where: { id: existingItem.id },
          data: { quantity: newQuantity },
        });
      }

      // 6️⃣ لو مش موجود → اعمله Create
      return this.prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId,
          quantity,
          userId,
          price: product.price,
        },
      });
    } catch (error) {
      // 🔥 سجل الخطأ
      this.logger.error('Add to cart error', error.stack);

      // 🔥 لو الخطأ HttpException → رجّعه زي ماهو
      if (error instanceof HttpException) {
        throw error;
      }

      // 🔥 غير كده → 500
      throw new InternalServerErrorException('Cart failed');
    }
  }

  async getCart(userId: string) {
    const cart = await this.prisma.cart.findUnique({
      where: { userId },
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                imageUrl: true,
              },
            },
          },
        },
      },
    });

    if (!cart) {
      return {
        items: [],
        totalItems: 0,
        totalPrice: 0,
      };
    }
    const totalPrice = cart.items.reduce((sum, item) => {
      return sum + item.quantity * item.product.price;
    }, 0);
    const totalItems = cart.items.reduce((sum, item) => {
      return sum + item.quantity;
    }, 0);
    return {
      cartId: cart.id,
      items: cart.items,
      totalItems,
      totalPrice,
    };
  }
  catch(error) {
    this.logger.error('Get cart error', error.stack);
    throw new InternalServerErrorException('Failed to load cart');
  }

  async updateQuantity(userId: string, itemId: string, quantity: number) {
    try {
      if (quantity < 0) {
        throw new BadRequestException('Quantity must be positive');
      }

      const cart = await this.prisma.cart.findUnique({
        where: { userId },
      });

      if (!cart) throw new NotFoundException('Cart not found');

      const item = await this.prisma.cartItem.findUnique({
        where: { id: itemId },
        include: { product: true },
      });

      if (!item) throw new NotFoundException('Cart item not found');

      //  لو الكمية 0 → احذفها
      if (quantity === 0) {
        await this.prisma.cartItem.delete({ where: { id: itemId } });
        return { message: 'Item removed' };
      }

      // check stock
      if (quantity > item.product.stock) {
        throw new BadRequestException('Not enough stock');
      }

      // update quantity
      return this.prisma.cartItem.update({
        where: { id: itemId },
        data: { quantity },
      });
    } catch (error) {
      this.logger.error('Update quantity error', error.stack);

      if (error instanceof HttpException) throw error;

      throw new InternalServerErrorException('Failed to update quantity');
    }
  }

  async clearCart(userId: string) {
    try {
      const cart = await this.prisma.cart.findUnique({
        where: { userId },
      });

      if (!cart) throw new NotFoundException('Cart not found');

      await this.prisma.cartItem.deleteMany({
        where: { cartId: cart.id },
      });

      return { message: 'Cart cleared successfully' };
    } catch (error) {
      this.logger.error('clear cart error', error.stack);

      if (error instanceof HttpException) throw error;

      throw new InternalServerErrorException('Failed to clear cart');
    }
  }

  async removeItem(userId: string, itemId: string) {
    try {
      const cart = await this.prisma.cart.findUnique({
        where: { userId },
      });

      if (!cart) throw new NotFoundException('Cart not found');

      const item = await this.prisma.cartItem.findUnique({
        where: { id: itemId },
      });

      if (!item) throw new NotFoundException('Cart item not found');

      await this.prisma.cartItem.delete({
        where: { id: itemId },
      });

      return { message: 'Item removed successfully' };
    } catch (error) {
      this.logger.error('Remove item error', error.stack);

      if (error instanceof HttpException) throw error;

      throw new InternalServerErrorException('Failed to remove item');
    }
  }
}
