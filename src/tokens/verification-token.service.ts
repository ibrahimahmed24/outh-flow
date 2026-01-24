import { Injectable } from '@nestjs/common';
import { VerificationToken } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VerificationTokenService {
  constructor(private readonly prisma: PrismaService) {}

  async findByToken(token: string) {
    return this.prisma.verificationToken.findUnique({ where: { token } });
  }

  async isExpired(token: VerificationToken) {
    return new Date() > token.expiresAt;
  }

  async deleteById(id: string) {
    return this.prisma.verificationToken.delete({ where: { id } });
  }
}
