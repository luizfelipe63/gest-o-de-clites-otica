import { Customer, Prisma } from '@prisma/client'

export interface CustomersRepository{
  create(data: Prisma.CustomerCreateInput): Promise<Customer>
  findyById(id: string): Promise<Customer | null>
  findyByCpf(cpf: string): Promise<Customer | null>
  findMany(): Promise<Customer[]>
  delete(id: string): Promise<Customer | null>
  update(id:string, data: Prisma.CustomerUpdateInput): Promise<Customer | null>
}