import { Injectable } from '@nestjs/common';
import { User } from './users/entities/user.entity';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  // constructor(private readonly prisma: PrismaClient) {}
  Getuser() {
    return;
  }
}
