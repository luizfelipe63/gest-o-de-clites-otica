import { customers } from "@prisma/client"
import { CustomersRepository } from "../repositories/customers-repository"
import { CustomerNotFound } from "./errors/customer-not-found-error"

interface DeleteCustormerRequest{
    customerId: string
}

interface DeleteCustormerResponse{
    customers: customers    
}

export class deleteCustormerUseCase{
    constructor(private customersRepository: CustomersRepository){}

    async execute({ 
        customerId
    }: DeleteCustormerRequest): Promise<DeleteCustormerResponse> {
    
        const customers = await this.customersRepository.delete(customerId)

        if(!customers){
            throw new CustomerNotFound()
        }

        return {
            customers
        }
    }
}