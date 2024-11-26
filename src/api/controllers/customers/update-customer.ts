import { Request, Response } from "express";
import { z } from "zod";
import { makeUpdateCustomerUseCase } from "../../../use-cases/factories/make-update-customer-use-case";
import { CustomerNotFound } from "../../../use-cases/errors/customer-not-found-error";

export async function updateCustomer(req: Request, res: Response){

    const updateCustomerBodySchema = z.object({
        id: z.string(),
        cpf: z.string().optional(),
        email: z.string().optional(),
        gender: z.enum(['M', 'F']).optional(),
        name: z.string().optional(),
        numberPhone: z.string().optional()
    })

    const {
        id,
        email, 
        name, 
        cpf,
        gender,
        numberPhone
} = updateCustomerBodySchema.parse(req.body)

    try{
        const updateCustomersUseCase = makeUpdateCustomerUseCase()

        const {customers} = await updateCustomersUseCase.execute({
            id,
            email,
            name,
            cpf,
            gender,
            numberPhone
        })

        return res.status(200).send(customers)
    }catch(err){
        if(err instanceof CustomerNotFound){
            return res.status(409).send({
                message: err.message
            })
        }
    }

}