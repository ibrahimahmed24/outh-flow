import { Type } from 'class-transformer';
import { IsArray, IsNumber, IsUUID, ValidateNested } from 'class-validator';

export class CreateOrderItemDto {
  @IsUUID()
  productId: string;

  @IsNumber()
  quantity: number;
}

export class CreateOrderDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  items: CreateOrderItemDto[];
}
