import { IsNotEmpty, IsString } from 'class-validator';

export class VerificationemailDTO {
  @IsString({ message: 'email must be a string' })
  @IsNotEmpty({ message: 'email is required' })
  email: string;
}
