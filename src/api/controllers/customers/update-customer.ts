import { Request, Response } from 'express';
import { z } from 'zod';
import { updateCustormerUseCase } from '../../../use-cases/update-customer';
import { PrismaCustormersRepository } from '../../../repositories/prisma/prisma-customers-repository';

export async function updateCustomer(req: Request, res: Response) {
  const upadateCustomerBodySchema = z.object({
    id: z.string(),
    cpf: z.string().optional(),
    email: z.string().optional(),
    gender: z.enum(['M', 'F']).optional(),
    name: z.string().optional(),
    numberPhone: z.string().optional(),
  });

  const { id, email, name, cpf, gender, numberPhone } =
    upadateCustomerBodySchema.parse(req.body);

  const prismaCustomersRepository = new PrismaCustormersRepository();
  const updateCustomersUseCase = new updateCustormerUseCase(
    prismaCustomersRepository
  );

  await updateCustomersUseCase.execute({
    id,
    email,
    name,
    cpf,
    gender,
    numberPhone,
  });

  return res.status(201).send();
}
