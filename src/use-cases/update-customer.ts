import { Customer } from "@prisma/client"
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
    customer: Customer
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

        const customer = await this.customersRepository.update(id, {
            cpf,
            email, 
            gender, 
            name, 
            numberPhone,
        })

        if(!customer){
            throw new CustomerNotFound()
        }

        return {
            customer
        }
    }
}