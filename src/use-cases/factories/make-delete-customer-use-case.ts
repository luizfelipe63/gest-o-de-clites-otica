import { PrismaCustormersRepository } from "../../repositories/prisma/prisma-customers-repository"
import { DeleteCustomerUseCase } from "../delete-customer"

export function makeDeleteCustomerUseCase() {
    const prismaCustomersRepository = new PrismaCustormersRepository()
    const deleteCustomerUseCase = new DeleteCustomerUseCase(prismaCustomersRepository)

    return deleteCustomerUseCase
}