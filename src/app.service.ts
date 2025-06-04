import { Injectable } from '@nestjs/common';
import { User } from './users/entities/user.entity';
import { PrismaClient } from '../prisma/generated/prisma';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaClient) {}
  Getuser(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
