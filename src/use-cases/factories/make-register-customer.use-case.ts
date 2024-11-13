import { PrismaCustormersRepository } from "../../repositories/prisma/prisma-customers-repository"
import { RegisterCustomerUseCase } from "../register-customers"

export function makeRegisterCustomerUseCase() {
    const prismaCustomersRepository = new PrismaCustormersRepository()
    const registerCustomerUseCase = new RegisterCustomerUseCase(prismaCustomersRepository)

    return registerCustomerUseCase
}