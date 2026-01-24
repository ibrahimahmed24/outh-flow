import { Module } from '@nestjs/common';
import { AuthService } from './aoth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './aoth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';
import { MailService } from 'src/mail/mail.service';
import { VerificationTokenService } from 'src/tokens/verification-token.service';
import { JwtAuthGuard } from 'src/gards/jwt-aoth.gards.guard';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (ConfigService: ConfigService) => ({
        secret: ConfigService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: ConfigService.get<string>('JWT_EXPIRATION') }, // Default to 1 hour if not set
      }),
    }),
  ],
  controllers: [AuthController],

  providers: [
    AuthService,
    UsersService,
    MailService,
    VerificationTokenService,
    JwtStrategy,
    JwtAuthGuard,
  ],
  exports: [VerificationTokenService],
})
export class AothModule {}
