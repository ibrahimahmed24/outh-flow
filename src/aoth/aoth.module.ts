import { Module } from '@nestjs/common';
import { AothService } from './aoth.service';
import { AothController } from './aoth.controller';

@Module({
  controllers: [AothController],
  providers: [AothService],
})
export class AothModule {}
