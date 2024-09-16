import { customers } from "@prisma/client"
import { CustomersRepository } from "../repositories/customers-repository"
import { error } from "console"

interface GetCustormerRequest{
    customerId: string
}

interface GetCustormerResponse{
    customers: customers    
}

export class getCustormerUseCase{
    constructor(private customersRepository: CustomersRepository){}

    async execute({ 
        customerId
    }: GetCustormerRequest): Promise<GetCustormerResponse> {
    
        const customers = await this.customersRepository.findyById(customerId)

        if(!customers){
            throw error("não existe")
        }

        return {
            customers
        }
    }
}