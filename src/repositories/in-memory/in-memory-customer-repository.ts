import { customers, Prisma } from "@prisma/client";
import { CustomersRepository } from "../customers-repository";


export class InMemoryCustormersRepository implements CustomersRepository{
    public customers: customers[] = []

   async create(data: Prisma.customersCreateInput){

    const customer = {
        id: 'customer-1',
        cpf: data.cpf,
        name: data.name,
        numberPhone: data.numberPhone,
        email: data.email,
        gender: data.gender,
        created_at: new Date()
    }

    this.customers.push(customer)

    return customer
    }

    async delete(id: string) {
        const itemIndex = this.customers.findIndex((item) => item.id === id)

        if (itemIndex === -1) {
            return null; 
        }

        const customer = this.customers[itemIndex];
        this.customers.splice(itemIndex, 1)

        return customer
    }

    async findyByCpf(cpf: string){
        const customer = this.customers.find((item) => item.cpf === cpf)

        if(!customer){
            return null
        }

        return customer
    }


    async findyById(id: string){
        const customer = this.customers.find((item) => item.id === id)

        if(!customer){
            return null
        }

        return customer
    }

    async update(id: string, data: Prisma.customersUpdateInput) {
        let updatedCustomer = null;
    
        this.customers.map((item) => {
            if (item.id === id) {
                updatedCustomer = {
                    ...item,
                    cpf: data.cpf ?? item.cpf,
                    email: data.email ?? item.email,
                    gender: data.gender ?? item.gender,
                    name: data.name ?? item.name,
                    numberPhone: data.numberPhone ?? item.numberPhone,
                };
                return updatedCustomer;
            }
            return item;
        });
    
        if (!updatedCustomer) {
            return null;
        }

        return updatedCustomer;
    }
}