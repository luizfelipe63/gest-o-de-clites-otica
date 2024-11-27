import { Request, Response } from "express";
import { date, z } from "zod";
import { makeRegisterCustomerUseCase } from "../../../use-cases/factories/make-register-customer.use-case";
import { CustomerAlreadyExistsError } from "../../../use-cases/errors/customer-already-exists-error";

export async function registerCustomer(req: Request, res: Response){
    const registerCustomerBodySchema = z.object({
        cpf: z.string(),
        email: z.string(),
        gender: z.enum(['M', 'F']),
        name: z.string(),
        numberPhone: z.string(),
        birth_data: z.coerce.date()
    })

    const {
        cpf, 
        email, 
        gender, 
        name, 
        numberPhone,
        birth_data
    } = registerCustomerBodySchema.parse(req.body)

    try{
       const registerCustomerUseCase = makeRegisterCustomerUseCase()

       const {customer} =  await registerCustomerUseCase.execute({
            cpf,
            email,
            gender,
            name,
            numberPhone,
            birth_data
        })

        return res.status(201).send(customer)

    }catch(err){
        if (err instanceof CustomerAlreadyExistsError) {
            return res.status(409).send({
              message: err.message,
            })
    }
}

}