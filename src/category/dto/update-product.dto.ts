import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-product.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
