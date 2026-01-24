import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { ConfigService } from '@nestjs/config';
import { MailService } from 'src/mail/mail.service';
import { VerifyEmailDto } from './dto/VerifyEmaildto';
import { VerificationTokenService } from 'src/tokens/verification-token.service';
import { VerificationemailDTO } from './dto/resend-verificationemail.dto';

import { LoginDto } from './dto/lgin.dto';
import { JwtService } from '@nestjs/jwt';
import { Refrshtokendto } from './dto/refeshtoken.dto';
import { Logoutdto } from './dto/logout.dto';
import { ForgotPassworddto } from './dto/resetpassword.dto';
import { ResetPasswordDto } from './dto/Resetpssword.dto';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly usersService: UsersService,
    private readonly JwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly MailService: MailService,
    private readonly verificationTokenService: VerificationTokenService,
  ) {}
  async register(
    registerDto: RegisterDto,
  ): Promise<{ message: string; description: string }> {
    try {
      const existingUser = await this.usersService.findByEmail(
        registerDto.email,
      );

      if (existingUser) {
        throw new BadRequestException({
          message: 'User with this email already exists',
          description: 'Please use a different email address',
        });
      }
      const hashedPassword = await bcrypt.hash(registerDto.password, 10);
      const user = await this.usersService.Create({
        ...registerDto,
        password: hashedPassword,
        role: registerDto.role || 'USER',
      });
      const verificationToken = await this.createEmailVerificationToken(
        user.id,
      );
      await this.MailService.creatsendMail(
        user.email,
        verificationToken.token,
        user.firstname as string,
      );
      return {
        message: 'Registration successful',
        description: 'Please check your email to verify your account.',
      };
    } catch (error) {
      this.logger.error('Error during registration', error.stack);
      throw new InternalServerErrorException('Registration failed');
    }
  }

  async verifyEmail(
    dto: VerifyEmailDto,
  ): Promise<{ message: string; description: string }> {
    const token = await this.verificationTokenService.findByToken(dto.token);

    if (!token) {
      throw new BadRequestException('Invalid token');
    }

    if (await this.verificationTokenService.isExpired(token)) {
      await this.verificationTokenService.deleteById(token.id);
      throw new BadRequestException('Token expired');
    }

    await this.usersService.markEmailAsVerified(token.userId);
    await this.verificationTokenService.deleteById(token.id);

    return {
      message: 'Email verified successfully',
      description: 'You can now log in.',
    };
  }
  async resendVerificationEmail(
    dto: VerificationemailDTO,
  ): Promise<{ message: string; description: string }> {
    try {
      const { email } = dto;

      const user = await this.usersService.findByEmail(email);
      if (!user) {
        throw new BadRequestException({
          message: 'User not found',
          description: 'User with this email does not exist',
        });
      }

      if (user.isEmailVerified) {
        return {
          message: 'Email already verified',
          description: 'This email has already been verified. Please log in.',
        };
      }

      let verificationToken = await this.prisma.verificationToken.findFirst({
        where: {
          userId: user.id,
          expiresAt: {
            gt: new Date(),
          },
        },
      });

      if (!verificationToken) {
        verificationToken = await this.createEmailVerificationToken(user.id);
      }
      await this.MailService.creatsendMail(
        user.email,
        verificationToken.token,
        user.firstname as string,
      );

      return {
        message: 'Verification email sent successfully',
        description: 'Please check your inbox to verify your email.',
      };
    } catch (err) {
      this.logger.error('Error in resendVerificationEmail', err.stack);
      throw new InternalServerErrorException(
        'Could not resend verification email',
      );
    }
  }

  async login(loginDto: LoginDto): Promise<{
    message: string;
    accessToken: string;
    refreshToken: string;
    user: { id: string; email: string };
  }> {
    const user = await this.usersService.findByEmail(loginDto.email);

    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    if (!user.password) {
      throw new UnauthorizedException('This account uses social login');
    }

    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    if (!user.isEmailVerified) {
      throw new UnauthorizedException('Email not verified');
    }

    const accessToken = this.generateAccessToken(user.id, user.email);
    const refreshToken = await this.generateRefreshToken(user.id);

    return {
      message: 'Login successful',
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
      },
    };
  }

  async refreshToken(dto: Refrshtokendto) {
    const { token } = dto;

    const existingToken = await this.prisma.refreshToken.findUnique({
      where: { token },
    });

    if (!existingToken || existingToken.expiresAt < new Date()) {
      if (existingToken) {
        await this.prisma.refreshToken.delete({
          where: { id: existingToken.id },
        });
      }
      throw new BadRequestException('Invalid or expired refresh token');
    }

    const user = await this.usersService.findById(existingToken.userId);
    if (!user) throw new BadRequestException('User not found');

    await this.prisma.refreshToken.delete({ where: { id: existingToken.id } });

    const accessToken = this.generateAccessToken(user.id, user.email);
    const newRefreshToken = await this.generateRefreshToken(user.id);

    return {
      message: 'Token refreshed successfully',
      accessToken,
      refreshToken: newRefreshToken,
      user: {
        id: user.id,
        email: user.email,
      },
    };
  }

  async logout(logoutdto: Logoutdto) {
    const { refreshtoken } = logoutdto;

    const refreshtokenfromdb = await this.prisma.refreshToken.findUnique({
      where: {
        token: refreshtoken,
      },
    });
    if (!refreshtokenfromdb) {
      throw new BadRequestException('invalid refresh token');
    }

    const user = await this.prisma.user.findUnique({
      where: {
        id: refreshtokenfromdb.userId,
      },
    });

    if (!user) {
      throw new BadRequestException('indaild credentials');
    }

    await this.prisma.refreshToken.deleteMany({
      where: {
        userId: refreshtokenfromdb.userId,
      },
    });

    return {
      message: 'logged out suces ',
      description: 'logged out successafully',
    };
  }

  async forgotPassword(forgotPassword: ForgotPassworddto) {
    const { email } = forgotPassword;
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new BadRequestException({
        message: 'User not found',
        description: 'No user found with this email address',
      });
    }
    await this.prisma.passwordResetToken.deleteMany({
      where: {
        userId: user.id,
      },
    });

    const token = randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 1000 * 60 * 10);
    await this.prisma.passwordResetToken.create({
      data: {
        userId: user.id,
        token,
        expiresAt,
      },
    });

    await this.MailService.sendResetPasswordEmail(user.email, token);
    return {
      message: 'Password reset email sent',
      description: 'Please check your inbox to reset your password',
    };
  }

  async resetPassword(resetPassworddto: ResetPasswordDto) {
    const { token, newPassword } = resetPassworddto;

    const passwordResetToken = await this.prisma.passwordResetToken.findUnique({
      where: { token },
    });

    if (!passwordResetToken) {
      throw new BadRequestException('Invalid or expired password reset token');
    }

    if (passwordResetToken.expiresAt < new Date()) {
      await this.prisma.passwordResetToken.delete({
        where: { id: passwordResetToken.id },
      });
      throw new BadRequestException('Password reset token has expired');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await this.usersService.updatePassword(
      passwordResetToken.userId,
      hashedPassword,
    );
    await this.prisma.passwordResetToken.delete({
      where: { id: passwordResetToken.id },
    });

    return {
      message: 'Password reset successfully',
      description: 'You can now log in with your new password',
    };
  }

  async getProfile(userId: string) {
    const user = await this.usersService.findById(userId);
    return {
      id: user.id,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
    };
  }

  private async createEmailVerificationToken(userId: string) {
    await this.prisma.verificationToken.deleteMany({
      where: { userId },
    });

    const token = Math.floor(1000 + Math.random() * 9000).toString();

    const tokenExpireMinutes = parseInt(
      this.configService.get<string>('VERIFICATION_TOKEN_EXPIRES_IN_TIME') ||
        '10',
      10,
    );
    const expiresAt = new Date(Date.now() + tokenExpireMinutes * 60 * 1000);

    return await this.prisma.verificationToken.create({
      data: {
        userId,
        token,
        expiresAt,
      },
    });
  }
  private generateAccessToken(userId: string, email: string) {
    const payload = { sub: userId, email };
    return this.JwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_SECRET'),
      expiresIn: this.configService.get<string>('EXPIRESIN'),
    });
  }

  private async generateRefreshToken(userId: string): Promise<string> {
    await this.prisma.refreshToken.deleteMany({
      where: {
        userId,
        expiresAt: { lt: new Date() },
      },
    });

    const token = randomBytes(40).toString('hex');

    const expirationDays = parseInt(
      this.configService.get<string>('REFRESH_TOKEN_EXPIRATION_DAYS') || '7',
      10,
    );
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + expirationDays);

    await this.prisma.refreshToken.create({
      data: {
        token,
        userId,
        expiresAt,
      },
    });

    return token;
  }
}
