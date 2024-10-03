import { Request, Response } from "express";
import { z } from "zod";
import { RegisterCustormesUseCase } from "../../../use-cases/register-customers";
import { PrismaCustormersRepository } from "../../../repositories/prisma/prisma-customers-repository";
import { CustomerAlreadyExistsError } from "../../../use-cases/errors/customer-already-exists-error";

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

    try{
        const prismaCustomersRepository = new PrismaCustormersRepository()
        const registerCustomersUseCase = new RegisterCustormesUseCase(prismaCustomersRepository)

        
        await registerCustomersUseCase.execute({
            cpf,
            email,
            gender,
            name,
            numberPhone
        })

    }catch(err){
        if (err instanceof CustomerAlreadyExistsError) {
            return res.status(409).send({
              message: err.message,
            })
          }
          return err
    }
    
    return res.status(201).send()

}