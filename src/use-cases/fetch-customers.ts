import { Customer} from "@prisma/client"
import { CustomersRepository } from "../repositories/customers-repository"

interface FetchCustomerResponse{
    customer: Customer[]
}

export class FetchCustomerUseCase{
    constructor(private customersRepository: CustomersRepository){}

    async execute(): Promise<FetchCustomerResponse> {
    
        const customer = await this.customersRepository.findMany()

        return {
            customer
        }
    }
}   