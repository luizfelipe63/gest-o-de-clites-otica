import { Customer } from "@prisma/client"
import { CustomersRepository } from "../repositories/customers-repository"
import { CustomerAlreadyExistsError } from "./errors/customer-already-exists-error"

interface RegisterCustomerRequest{
  cpf : string
  name : string
  numberPhone: string
  email: string   
  gender: string
  birth_data: Date
}

interface RegisterCustomerResponse{
    customer: Customer   
}

export class RegisterCustomerUseCase{
    constructor(private customerRepository: CustomersRepository){}

    async execute({ 
        cpf, 
        email, 
        gender, 
        name, 
        birth_data,
        numberPhone
    }: RegisterCustomerRequest): Promise<RegisterCustomerResponse> {

        const customerWithExistingCpf = await this.customerRepository.findyByCpf(cpf)

        if(customerWithExistingCpf){
            throw new CustomerAlreadyExistsError()
        }
    
        const customer = await this.customerRepository.create({
            cpf,
            email, 
            gender, 
            name, 
            numberPhone,
            birth_data
        })

        return {
            customer
        }
    }
}