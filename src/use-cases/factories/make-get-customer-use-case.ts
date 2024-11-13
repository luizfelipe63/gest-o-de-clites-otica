import { PrismaCustormersRepository } from "../../repositories/prisma/prisma-customers-repository"
import { GetCustomerUseCase } from "../get-customer"

export function makeGetCustomerUseCase() {
    const prismaCustomersRepository = new PrismaCustormersRepository()
    const getCustomerUseCase = new GetCustomerUseCase(prismaCustomersRepository)

    return getCustomerUseCase
}