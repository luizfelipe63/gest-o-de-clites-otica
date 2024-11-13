import { customers } from "@prisma/client"
import { CustomersRepository } from "../repositories/customers-repository"
import { CustomerNotFound } from "./errors/customer-not-found-error"

interface GetCustomerRequest{
    customerId: string
}

interface GetCustomerResponse{
    customers: customers    
}

export class GetCustomerUseCase{
    constructor(private customersRepository: CustomersRepository){}

    async execute({ 
        customerId
    }: GetCustomerRequest): Promise<GetCustomerResponse> {
    
        const customers = await this.customersRepository.findyById(customerId)

        if(!customers){
            throw new CustomerNotFound()
        }

        return {
            customers
        }
    }
}