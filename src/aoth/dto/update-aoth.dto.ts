import { PartialType } from '@nestjs/mapped-types';
import { CreateAothDto } from './create-aoth.dto';

export class UpdateAothDto extends PartialType(CreateAothDto) {}
