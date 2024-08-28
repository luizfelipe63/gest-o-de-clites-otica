import { customers, Prisma } from '@prisma/client'

export interface CustomersRepository{
  create(data: Prisma.customersCreateInput): Promise<customers>
}