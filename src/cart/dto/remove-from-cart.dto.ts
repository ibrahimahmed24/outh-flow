import { IsNotEmpty, IsString } from 'class-validator';

export class RemoveItemDto {
  @IsString()
  @IsNotEmpty()
  productId: string;
}
