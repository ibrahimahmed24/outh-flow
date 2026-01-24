import { IsNotEmpty, IsString } from 'class-validator';

export class Logoutdto {
  @IsString({ message: 'refresh token must be a string' })
  @IsNotEmpty({ message: 'refresh token is required' })
  refreshtoken: string;
}
