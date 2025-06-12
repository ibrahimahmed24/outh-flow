import { Module } from '@nestjs/common';
import { AothService } from './aoth.service';
import { JwtModule } from '@nestjs/jwt';
import { AothController } from './aoth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [AothController],
  imports: [

    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (ConfigService:ConfigService) => ({

        secret:ConfigService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: ConfigService.get<string>('JWT_EXPIRATION') }, // Default to 1 hour if not set
      }),
    }),
  ],

  providers: [AothService],
})
export class AothModule {}
