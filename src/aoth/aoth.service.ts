import { Injectable } from '@nestjs/common';
import { CreateAothDto } from './dto/create-aoth.dto';
import { UpdateAothDto } from './dto/update-aoth.dto';

@Injectable()
export class AothService {
  create(createAothDto: CreateAothDto) {
    return 'This action adds a new aoth';
  }

  findAll() {
    return `This action returns all aoth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aoth`;
  }

  update(id: number, updateAothDto: UpdateAothDto) {
    return `This action updates a #${id} aoth`;
  }

  remove(id: number) {
    return `This action removes a #${id} aoth`;
  }
}
