import { describe, it, expect, beforeEach} from "vitest";
import { InMemoryCustormersRepository } from "../repositories/in-memory/in-memory-customer-repository";
import { UpdateCustomerUseCase } from "./update-customer";

let customerRepository: InMemoryCustormersRepository
let sut: UpdateCustomerUseCase

describe("update customer", () => {
	beforeEach(() => {
		customerRepository = new InMemoryCustormersRepository
		sut = new UpdateCustomerUseCase(customerRepository)
	})

	it("should be able to update customer", async () => {
		const createCustomer = await customerRepository.create({
			cpf: "111-111-111-67", 
			email: "johdoe@gmail.com",
			gender: "M",
			name: "Joh Doe",
			numberPhone: "(61) 99550-2167",
			birth_data: new Date("2003-08-13")
		})

        const { customer } = await sut.execute({
            id: createCustomer.id,
            name: 'Luiz Felipe',
            email: 'luiz@gmail.com'
        })
		
		expect(customer.name).toEqual('Luiz Felipe')
	});
});
