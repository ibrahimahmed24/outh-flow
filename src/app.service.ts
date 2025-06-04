import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated/prisma';
import { User } from './users/entities/user.entity';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaClient) {}
  Getuser(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}