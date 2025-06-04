import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getuser(): Promise<User[]> {
    return this.appService.Getuser();
  }
}
