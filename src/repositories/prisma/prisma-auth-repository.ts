import { user, Prisma } from '@prisma/client';
import { AuthRepository } from '../auth-repository';
import { prisma } from '../../lib/prisma';

export class PrismaAuthRepository implements AuthRepository {
  async registerUser(data: Prisma.userCreateInput) {
    const user = prisma.user.create({
      data,
    });

    return user;
  }

  async getByEmail(email: string) {
    const user = prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async getById(id: number) {
    const user = prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }
}
