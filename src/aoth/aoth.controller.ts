import { Get, Controller } from '@nestjs/common';
import { AothService } from './aoth.service';

@Controller()
export class AothController {
  constructor(private readonly AothService: AothService) {}

  @Get()
  getuser() {
    return console.log(process.env.NODE_ENV);
  }
}
