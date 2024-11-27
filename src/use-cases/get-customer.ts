import { Customer} from "@prisma/client"
import { CustomersRepository } from "../repositories/customers-repository"
import { CustomerNotFound } from "./errors/customer-not-found-error"

interface GetCustomerRequest{
    customerId: string
}

interface GetCustomerResponse{
    customer: Customer    
}

export class GetCustomerUseCase{
    constructor(private customersRepository: CustomersRepository){}

    async execute({ 
        customerId
    }: GetCustomerRequest): Promise<GetCustomerResponse> {
    
        const customer = await this.customersRepository.findyById(customerId)

        if(!customer){
            throw new CustomerNotFound()
        }

        return {
            customer
        }
    }
}