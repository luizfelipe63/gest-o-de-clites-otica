import { describe, it, expect, beforeEach} from "vitest";
import { InMemoryCustormersRepository } from "../repositories/in-memory/in-memory-customer-repository";
import { RegisterCustomerUseCase } from "./register-customers";
import { CustomerAlreadyExistsError } from "./errors/customer-already-exists-error";

let customerRepository: InMemoryCustormersRepository
let sut: RegisterCustomerUseCase

describe("create customer", () => {
	beforeEach(() => {
		customerRepository = new InMemoryCustormersRepository
		sut = new RegisterCustomerUseCase(customerRepository)
	})

	it("should be possible to create a client ", async () => {
		const { customer } = await sut.execute({
			cpf: "111-111-111-67",
			email: "johdoe@gmail.com",
			gender: "M",
			name: "Joh Doe",
			numberPhone: "(61) 99550-2167",
			birth_data: new Date("2003-08-13")
		})
		
		expect(customer.id).toEqual(expect.any(String))
	});

	it("is not possible to create a customer with the same CPF", async () => {
		const cpf = "111-111-111-67"

		await sut.execute({
			cpf,
			email: "johdoe@gmail.com",
			gender: "M",
			name: "Joh Doe",
			numberPhone: "(61) 99550-2167",
			birth_data: new Date("2003-08-13")
		})

		await expect(() => sut.execute({
			cpf,
			email: "johdoe@gmail.com",
			gender: "M",
			name: "Joh Doe",
			numberPhone: "(61) 99550-2167",
			birth_data: new Date("2003-08-13")
		})).rejects.toBeInstanceOf(CustomerAlreadyExistsError)

	})
});
