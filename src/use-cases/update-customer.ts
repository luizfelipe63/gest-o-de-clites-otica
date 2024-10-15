import { customers } from "@prisma/client"
import { CustomersRepository } from "../repositories/customers-repository"
import { CustomerNotFound } from "./errors/customer-not-found-error"

interface UpdateCustormesRequest{
    id: string
    cpf?: string
    name?: string
    numberPhone?: string
    email?: string   
    gender?: string
}

interface UpdateCustormesResponse{
    customers: customers  
}

export class updateCustormerUseCase{
    constructor(private customersRepository: CustomersRepository){}

    async execute({ 
        id,
        email, 
        name, 
        cpf,
        gender,
        numberPhone
    }: UpdateCustormesRequest): Promise<UpdateCustormesResponse> {

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