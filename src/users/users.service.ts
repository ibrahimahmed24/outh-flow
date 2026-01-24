import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async Create(createUserDto: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        firstname: true,
        lastname: true,
        isEmailVerified: true,
        Provider: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async markEmailAsVerified(userId: string) {
    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        isEmailVerified: true,
      },
    });
  }
  async updatePassword(userId: string, newHashedPassword: string) {
    return this.prisma.user.update({
      where: { id: userId },
      data: {
        password: newHashedPassword,
      },
    });
  }
}
