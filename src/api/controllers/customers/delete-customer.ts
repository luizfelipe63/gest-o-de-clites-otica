import { z } from "zod"
import { PrismaCustormersRepository } from "../../../repositories/prisma/prisma-customers-repository"
import { deleteCustormerUseCase } from "../../../use-cases/delete-customer"
import { Request, Response } from "express"
import { CustomerNotFound } from "../../../use-cases/errors/customer-not-found-error"

export async function deleteCustomer(req: Request, res: Response){
    const createCustomerBodySchema = z.object({
        customerId: z.string()
    })

    const {customerId} = createCustomerBodySchema.parse(req.body)

    try{
        const prismaCustomersRepository = new PrismaCustormersRepository()
        const deleteCustomerUseCase = new deleteCustormerUseCase(prismaCustomersRepository)

        await deleteCustomerUseCase.execute({
            customerId
        })
    }catch(err){
        if (err instanceof CustomerNotFound) {
            return res.status(409).send({
                message: err.message,
            })
            }
            return err
    }
    

    return res.status(200).send('customer successfully deleted')

}