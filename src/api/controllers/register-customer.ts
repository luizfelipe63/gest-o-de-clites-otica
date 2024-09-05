import { Request, Response } from "express";
import { z } from "zod";
import { RegisterCustormesUseCase } from "../../use-cases/register-customers";
import { PrismaCustormersRepository } from "../../repositories/prisma/prisma-customers-repository";

export async function registerCustomer(req: Request, res: Response){
    const registerCustomerBodySchema = z.object({
        cpf: z.string(),
        email: z.string(),
        gender: z.enum(['M', 'F']),
        name: z.string(),
        numberPhone: z.string()
    })

    const {
        cpf, 
        email, 
        gender, 
        name, 
        numberPhone
    } = registerCustomerBodySchema.parse(req.body)

    const prismaCustomersRepository = new PrismaCustormersRepository()
    const registerCustomersUseCase = new RegisterCustormesUseCase(prismaCustomersRepository)

    await registerCustomersUseCase.execute({
        cpf,
        email,
        gender,
        name,
        numberPhone
    })

    return res.status(201).send()

}