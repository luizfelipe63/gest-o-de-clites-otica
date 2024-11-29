import { PrismaCustormersRepository } from "../../repositories/prisma/prisma-customers-repository"
import { ListCustomerUseCase } from "../list-customers"

export function makeListCustomersUseCase() {
    const prismaCustomersRepository = new PrismaCustormersRepository()
    const listCustomersUseCase = new ListCustomerUseCase(prismaCustomersRepository)

    return listCustomersUseCase
}