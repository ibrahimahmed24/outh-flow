import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AothService } from './aoth.service';
import { CreateAothDto } from './dto/create-aoth.dto';
import { UpdateAothDto } from './dto/update-aoth.dto';

@Controller('aoth')
export class AothController {
  constructor(private readonly aothService: AothService) {}

  @Post()
  create(@Body() createAothDto: CreateAothDto) {
    return this.aothService.create(createAothDto);
  }

  @Get()
  findAll() {
    return this.aothService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aothService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAothDto: UpdateAothDto) {
    return this.aothService.update(+id, updateAothDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aothService.remove(+id);
  }
}
