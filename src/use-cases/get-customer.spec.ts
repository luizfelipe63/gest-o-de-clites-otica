import { describe, it, expect, beforeEach} from "vitest";
import { InMemoryCustormersRepository } from "../repositories/in-memory/in-memory-customer-repository";
import { GetCustomerUseCase } from "./get-customer";
import { CustomerNotFound } from "./errors/customer-not-found-error";

let customerRepository: InMemoryCustormersRepository
let sut: GetCustomerUseCase

describe("get by customer", () => {
	beforeEach(() => {
		customerRepository = new InMemoryCustormersRepository
		sut = new GetCustomerUseCase(customerRepository)
	})

	it("should be able to get customer profile", async () => {
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
		
		expect(customers.name).toEqual("Joh Doe")
	});

    it("should not be able to get customer profile with wrong id", async () => {
        await expect(() => sut.execute({
            customerId: "non-existing-id"
        })).rejects.toBeInstanceOf(CustomerNotFound)
    })
});
