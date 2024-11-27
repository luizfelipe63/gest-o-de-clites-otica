import { Customer } from "@prisma/client"
import { CustomersRepository } from "../repositories/customers-repository"
import { CustomerNotFound } from "./errors/customer-not-found-error"

interface DeleteCustomerRequest{
    customerId: string
}

interface DeleteCustomerResponse{
    customer: Customer    
}

export class DeleteCustomerUseCase{
    constructor(private customersRepository: CustomersRepository){}

    async execute({ 
        customerId
    }: DeleteCustomerRequest): Promise<DeleteCustomerResponse> {
    
        const customer = await this.customersRepository.delete(customerId)

        if(!customer){
            throw new CustomerNotFound()
        }

        return {
            customer
        }
    }
}