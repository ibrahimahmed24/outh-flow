import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AothModule } from './aoth/aoth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { MailModule } from './mail/mail.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { CartModule } from './cart/cart.module';
import { WishlisModule } from './wishlis/wishlis.module';
import { OrderModule } from './order/order.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    AothModule,
    UsersModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MailModule,
    ProductModule,
    CategoryModule,
    CartModule,
    WishlisModule,
    OrderModule,
    PaymentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
