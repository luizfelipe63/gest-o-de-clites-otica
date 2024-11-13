import { customers } from "@prisma/client"
import { CustomersRepository } from "../repositories/customers-repository"
import { CustomerNotFound } from "./errors/customer-not-found-error"

interface DeleteCustomerRequest{
    customerId: string
}

interface DeleteCustomerResponse{
    customers: customers    
}

export class DeleteCustomerUseCase{
    constructor(private customersRepository: CustomersRepository){}

    async execute({ 
        customerId
    }: DeleteCustomerRequest): Promise<DeleteCustomerResponse> {
    
        const customers = await this.customersRepository.delete(customerId)

        if(!customers){
            throw new CustomerNotFound()
        }

        return {
            customers
        }
    }
}