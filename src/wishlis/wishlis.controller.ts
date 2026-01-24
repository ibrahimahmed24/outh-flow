import {
  Controller,
  Post,
  Delete,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import { WishlisService } from './wishlis.service';
import { JwtAuthGuard } from 'src/gards/jwt-aoth.gards.guard';
import { RolesGuard } from 'src/gards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { GetUser } from 'src/decorators/GetUser.Decorator';

@Controller('wishlist')
@UseGuards(JwtAuthGuard, RolesGuard)
export class WishlistController {
  constructor(private readonly wishlistService: WishlisService) {}

  @Post(':productId')
  @Roles(Role.ADMIN, Role.USER)
  addToWishlist(
    @GetUser('sub') userId: string,
    @Param('productId') productId: string,
  ) {
    return this.wishlistService.getWishlistItems(userId, productId);
  }

  @Delete(':productId')
  @Roles(Role.ADMIN, Role.USER)
  removeFromWishlist(
    @GetUser('sub') userId: string,
    @Param('productId') productId: string,
  ) {
    return this.wishlistService.removeWishlistItem(userId, productId);
  }

  @Get()
  @Roles(Role.ADMIN)
  getWishlist(@GetUser('sub') userId: string) {
    return this.wishlistService.getUserWishlist(userId);
  }
}
