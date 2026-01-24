import { Module } from '@nestjs/common';
import { WishlistController } from './wishlis.controller';
import { WishlisService } from './wishlis.service';

@Module({
  controllers: [WishlistController],
  providers: [WishlisService],
})
export class WishlisModule {}
