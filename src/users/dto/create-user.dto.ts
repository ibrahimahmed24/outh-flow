import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import {
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
  Matches,
  IsEnum,
} from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @IsEmail({}, { message: 'please entet a valid emali address' })
  @ApiProperty({
    description: 'The email address of the user',
    required: true,
  })
  email: string;

  @IsString({ message: 'please enter a valid password' })
  @MinLength(6, { message: 'password must be at least 6 characters long' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, {
    message:
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
  })
  @ApiProperty({
    description:
      'The password  of the user must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    required: true,
    minLength: 6,
    pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$',
  })
  password: string;

  @IsOptional()
  @IsString({ message: 'please enter a valid username' })
  @MinLength(6, { message: 'first name  must be at least 6 characters long' })
  @ApiProperty({
    description: 'The first name of the user',
    required: false,
  })
  firstname?: string;

  @IsOptional({ message: 'last name  must be at least 6 characters long' })
  @IsString({ message: 'please enter a valid username' })
  @MinLength(6, { message: 'last name  must be at least 6 characters long' })
  @ApiProperty({
    description: 'The last name of the user',
    required: false,
  })
  lastname?: string;
}
