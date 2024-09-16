import { z } from "zod"
import { PrismaCustormersRepository } from "../../repositories/prisma/prisma-customers-repository"
import { getCustormerUseCase } from "../../use-cases/get-customer"
import { Request, Response } from "express"

export async function readCustomer(req: Request, res: Response){
    const createCustomerBodySchema = z.object({
        customerId: z.string()
    })

    const {customerId} = createCustomerBodySchema.parse(req.body)

    const prismaCustomersRepository = new PrismaCustormersRepository()
    const getCustomerUseCase = new getCustormerUseCase(prismaCustomersRepository)

    const {customers} = await getCustomerUseCase.execute({
        customerId
    })

    return res.status(200).send({
        customers:{
            ...customers
        }
    })

}