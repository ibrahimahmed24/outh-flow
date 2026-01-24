import {
  Controller,
  Body,
  Post,
  HttpCode,
  HttpStatus,
  Get,
  UseGuards,
  Req,
  Version,
} from '@nestjs/common';
import { AuthService } from './aoth.service';
import { RegisterDto } from './dto/register.dto';
import { VerificationemailDTO } from './dto/resend-verificationemail.dto';
import { Logoutdto } from './dto/logout.dto';
import { JwtAuthGuard } from 'src/gards/jwt-aoth.gards.guard';
import { Role, User } from '@prisma/client';
import { VerifyEmailDto } from './dto/VerifyEmaildto';
import { ResetPasswordDto } from './dto/Resetpssword.dto';
import { ForgotPassworddto } from './dto/resetpassword.dto';
import { Refrshtokendto } from './dto/refeshtoken.dto';
import { LoginDto } from './dto/lgin.dto';

import { ApiBearerAuth, ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUser } from 'src/decorators/GetUser.Decorator';
import { Roles } from 'src/decorators/roles.decorator';

@ApiTags('Authentication')
@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({
    type: RegisterDto,
    description: 'User registration data',
    examples: {
      example1: {
        summary: 'User registration example',
        value: {
          email: 'user@example.com',
          password: 'password123',
          firstname: 'John',
          lastname: 'Doe',
        },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'User registration successful' })
  @ApiResponse({ status: 400, description: 'User registration failed' })
  @ApiResponse({ status: 409, description: 'Email already exists' })
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('verify-email')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: VerifyEmailDto })
  @ApiResponse({ status: 200, description: 'Email verified successfully' })
  @ApiResponse({ status: 400, description: 'Invalid or expired token' })
  verifyEmail(@Body() verifyemail: VerifyEmailDto) {
    return this.authService.verifyEmail(verifyemail);
  }

  @Post('resend-verification-email')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: VerificationemailDTO })
  @ApiResponse({ status: 200, description: 'Verification email sent' })
  @ApiResponse({ status: 404, description: 'Email not found' })
  resendVerificationEmail(@Body() verificationemail: VerificationemailDTO) {
    return this.authService.resendVerificationEmail(verificationemail);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: LoginDto })
  @ApiResponse({ status: 200, description: 'Login successful' })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('refresh-token')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: Refrshtokendto })
  @ApiResponse({ status: 200, description: 'Token refreshed successfully' })
  @ApiResponse({ status: 403, description: 'Invalid or expired token' })
  refreshToken(@Body() tokenDto: Refrshtokendto) {
    return this.authService.refreshToken(tokenDto);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: Logoutdto })
  @ApiResponse({ status: 200, description: 'Logout successful' })
  logout(@Body() logoutDto: Logoutdto) {
    return this.authService.logout(logoutDto);
  }

  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: ForgotPassworddto })
  @ApiResponse({ status: 200, description: 'Reset email sent' })
  forgotPassword(@Body() forgotPasswordDto: ForgotPassworddto) {
    return this.authService.forgotPassword(forgotPasswordDto);
  }

  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: ResetPasswordDto })
  @ApiResponse({ status: 200, description: 'Password reset successful' })
  @ApiResponse({ status: 400, description: 'Invalid or expired token' })
  resetPassword(@Body() dto: ResetPasswordDto) {
    return this.authService.resetPassword(dto);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('token')
  @ApiResponse({ status: 200, description: 'User profile retrieved' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  getProfile(@GetUser('id') userId: string) {
    return this.authService.getProfile(userId);
  }
}
