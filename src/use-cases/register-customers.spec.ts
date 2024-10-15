import { describe, it, expect, beforeEach} from "vitest";
import { InMemoryCustormersRepository } from "../repositories/in-memory/in-memory-customer-repository";
import { RegisterCustormesUseCase } from "./register-customers";
import { CustomerAlreadyExistsError } from "./errors/customer-already-exists-error";

let customerRepository: InMemoryCustormersRepository
let sut: RegisterCustormesUseCase

describe("create customer", () => {
	beforeEach(() => {
		customerRepository = new InMemoryCustormersRepository
		sut = new RegisterCustormesUseCase(customerRepository)
	})

	it("it should be possible to create a client ", async () => {
		const { customers } = await sut.execute({
			cpf: "111-111-111-67",
			email: "johdoe@gmail.com",
			gender: "M",
			name: "Joh Doe",
			numberPhone: "(61) 99550-2167"
		})
		
		expect(customers.id).toEqual(expect.any(String))
	});

	it("It is not possible to create a customer with the same CPF", async () => {
		const cpf = "111-111-111-67"

		await sut.execute({
			cpf,
			email: "johdoe@gmail.com",
			gender: "M",
			name: "Joh Doe",
			numberPhone: "(61) 99550-2167"
		})

		await expect(() => sut.execute({
			cpf,
			email: "johdoe@gmail.com",
			gender: "M",
			name: "Joh Doe",
			numberPhone: "(61) 99550-2167"
		})).rejects.toBeInstanceOf(CustomerAlreadyExistsError)

	})
});
