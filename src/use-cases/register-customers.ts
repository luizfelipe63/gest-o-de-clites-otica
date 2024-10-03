import { customers } from "@prisma/client"
import { CustomersRepository } from "../repositories/customers-repository"
import { CustomerAlreadyExistsError } from "./errors/customer-already-exists-error"

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

        const customerWithExistingCpf = await this.customersRepository.findyByCpf(cpf)

        if(customerWithExistingCpf){
            throw new CustomerAlreadyExistsError()
        }
    
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