import { describe, it, expect, beforeEach} from "vitest";
import { InMemoryCustormersRepository } from "../repositories/in-memory/in-memory-customer-repository";
import { updateCustormerUseCase } from "./update-customer";

let customerRepository: InMemoryCustormersRepository
let sut: updateCustormerUseCase

describe("update customer", () => {
	beforeEach(() => {
		customerRepository = new InMemoryCustormersRepository
		sut = new updateCustormerUseCase(customerRepository)
	})

	it("should be able to update customer", async () => {
		const createCustomer = await customerRepository.create({
			cpf: "111-111-111-67", 
			email: "johdoe@gmail.com",
			gender: "M",
			name: "Joh Doe",
			numberPhone: "(61) 99550-2167"
		})

        const { customers } = await sut.execute({
            id: createCustomer.id,
            name: 'Luiz Felipe',
            email: 'luiz@gmail.com'
        })
		
		expect(customers.name).toEqual('Luiz Felipe')
	});
});
