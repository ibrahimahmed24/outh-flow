import { IsNotEmpty, IsString } from 'class-validator';

export class ForgotPassworddto {
  @IsString({ message: 'refresh token must be a string' })
  email: string;
}
