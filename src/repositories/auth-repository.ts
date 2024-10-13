import { customers, Prisma, user } from '@prisma/client';

export interface AuthRepository {
  registerUser: (data: Prisma.userCreateInput) => Promise<user>;
  getByEmail: (email: string) => Promise<user | null>;
  getById: (id: number) => Promise<user | null>;
}
