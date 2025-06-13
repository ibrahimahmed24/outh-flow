import {  Controller ,Body, Post} from '@nestjs/common';
import { AothService } from './aoth.service';
import { RegisterDto } from './dto/register.dto';

@Controller("aoth")
export class AothController {
  constructor(private readonly AothService: AothService) {}
@Post('register')
  register(@Body() registerDto: RegisterDto) {
    
    return this.AothService.register(registerDto);
  }
}
