import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

// import { UpdateAothDto } from './dto/update-aoth.dto';

@Injectable()
export class AothService {
     register(registerDto:RegisterDto){
            return RegisterDto;
     }
}
