import { customers } from "@prisma/client"
import { CustomersRepository } from "../repositories/customers-repository"
import { CustomerNotFound } from "./errors/customer-not-found-error"

interface UpdateCustomerRequest{
    id: string
    cpf?: string
    name?: string
    numberPhone?: string
    email?: string   
    gender?: string
}

interface UpdateCustomerResponse{
    customers: customers  
}

export class UpdateCustomerUseCase{
    constructor(private customersRepository: CustomersRepository){}

    async execute({ 
        id,
        email, 
        name, 
        cpf,
        gender,
        numberPhone
    }: UpdateCustomerRequest): Promise<UpdateCustomerResponse> {

        const customers = await this.customersRepository.update(id, {
            cpf,
            email, 
            gender, 
            name, 
            numberPhone,
        })

        if(!customers){
            throw new CustomerNotFound()
        }

        return {
            customers
        }
    }
}