import { PrismaCustormersRepository } from "../../repositories/prisma/prisma-customers-repository"
import { FetchCustomerUseCase } from "../fetch-customers"

export function makeFetchCustomersUseCase() {
    const prismaCustomersRepository = new PrismaCustormersRepository()
    const fetchCustomersUseCase = new FetchCustomerUseCase(prismaCustomersRepository)

    return fetchCustomersUseCase
}