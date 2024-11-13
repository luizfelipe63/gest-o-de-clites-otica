import { PrismaCustormersRepository } from "../../repositories/prisma/prisma-customers-repository"
import { UpdateCustomerUseCase } from "../update-customer"

export function makeUpdateCustomerUseCase() {
    const prismaCustomersRepository = new PrismaCustormersRepository()
    const updateCustomerUseCase = new UpdateCustomerUseCase(prismaCustomersRepository)

    return updateCustomerUseCase
}