import { z } from "zod"
import { PrismaCustormersRepository } from "../../repositories/prisma/prisma-customers-repository"
import { deleteCustormerUseCase } from "../../use-cases/delete-customer"
import { Request, Response } from "express"

export async function deleteCustomer(req: Request, res: Response){
    const createCustomerBodySchema = z.object({
        customerId: z.string()
    })

    const {customerId} = createCustomerBodySchema.parse(req.body)

    const prismaCustomersRepository = new PrismaCustormersRepository()
    const deleteCustomerUseCase = new deleteCustormerUseCase(prismaCustomersRepository)

    const {customers} = await deleteCustomerUseCase.execute({
        customerId
    })

    return res.status(200).send({
        customers:{
            ...customers
        }
    })

}