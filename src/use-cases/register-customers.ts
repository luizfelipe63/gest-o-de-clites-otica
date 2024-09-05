import { customers } from "@prisma/client"
import { CustomersRepository } from "../repositories/customers-repository"

interface RegisterCustormesRequest{
  cpf : string
  name : string
  numberPhone: string
  email: string   
  gender: string
}

interface RegisterCustormesResponse{
    customers: customers    
}

export class RegisterCustormesUseCase{
    constructor(private customersRepository: CustomersRepository){}

    async execute({ 
        cpf, 
        email, 
        gender, 
        name, 
        numberPhone
    }: RegisterCustormesRequest): Promise<RegisterCustormesResponse> {
    
        const customers = await this.customersRepository.create({
            cpf,
            email, 
            gender, 
            name, 
            numberPhone,
        })

        return {
            customers
        }
    }
}