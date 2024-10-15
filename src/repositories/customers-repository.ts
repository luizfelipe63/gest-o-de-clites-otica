import { customers, Prisma } from '@prisma/client'

export interface CustomersRepository{
  create(data: Prisma.customersCreateInput): Promise<customers>
  findyById(id: string): Promise<customers | null>
  findyByCpf(cpf: string): Promise<customers | null>
  delete(id: string): Promise<customers | null>
  update(id:string, data: Prisma.customersUpdateInput): Promise<customers | null>
}