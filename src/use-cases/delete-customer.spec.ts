import { describe, it, expect, beforeEach} from "vitest";
import { InMemoryCustormersRepository } from "../repositories/in-memory/in-memory-customer-repository";
import { DeleteCustomerUseCase } from "./delete-customer";

let customerRepository: InMemoryCustormersRepository
let sut: DeleteCustomerUseCase

describe("delete customer", () => {
	beforeEach(() => {
		customerRepository = new InMemoryCustormersRepository
		sut = new DeleteCustomerUseCase(customerRepository)
	})

	it("should be able to delete customer", async () => {
		const createCustomer = await customerRepository.create({
			cpf: "111-111-111-67", 
			email: "johdoe@gmail.com",
			gender: "M",
			name: "Joh Doe",
			numberPhone: "(61) 99550-2167"
		})

        const { customers } = await sut.execute({
            customerId: createCustomer.id
        })

		expect(customerRepository.customers).toHaveLength(0)
	});
});
