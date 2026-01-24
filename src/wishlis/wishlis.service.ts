import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WishlisService {
  constructor(private prisma: PrismaService) {}

  async getWishlistItems(userId: string, productId: string) {
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
    });
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    const existing = await this.prisma.wishlist.findUnique({
      where: { userId_productId: { userId, productId } },
    });
    if (existing) throw new BadRequestException('Product already in wishlist');

    return this.prisma.wishlist.create({
      data: {
        userId,
        productId,
      },
    });
  }

  async removeWishlistItem(userId: string, productId: string) {
    const wishlistItem = await this.prisma.wishlist.findUnique({
      where: { userId_productId: { userId, productId } },
    });

    if (!wishlistItem) throw new NotFoundException('Product not in wishlist');

    await this.prisma.wishlist.delete({
      where: { userId_productId: { userId, productId } },
    });
    return { message: 'Product removed from wishlist' };
  }

  async getUserWishlist(userId: string) {
    return this.prisma.wishlist.findMany({
      where: { userId },
      include: {
        product: true,
      },
    });
  }
}
