import { Customer} from "@prisma/client"
import { CustomersRepository } from "../repositories/customers-repository"

interface ListCustomerResponse{
    customer: Customer[]
}

export class ListCustomerUseCase{
    constructor(private customersRepository: CustomersRepository){}

    async execute(): Promise<ListCustomerResponse> {
    
        const customer = await this.customersRepository.findMany()

        return {
            customer
        }
    }
}   