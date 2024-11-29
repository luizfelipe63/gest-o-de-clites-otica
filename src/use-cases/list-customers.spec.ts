import { describe, it, expect, beforeEach} from "vitest";
import { InMemoryCustormersRepository } from "../repositories/in-memory/in-memory-customer-repository";
import { ListCustomerUseCase } from "./list-customers";

let customerRepository: InMemoryCustormersRepository
let sut: ListCustomerUseCase

describe("list by customers", () => {
	beforeEach(() => {
		customerRepository = new InMemoryCustormersRepository
		sut = new ListCustomerUseCase(customerRepository)
	})

	it("should be able list customers", async () => {
		 await customerRepository.create({
			cpf: "111-111-111-67", 
			email: "johdoe@gmail.com",
			gender: "M",
			name: "Joh Doe",
			numberPhone: "(61) 99550-2167",
			birth_data: new Date("2003-08-13")
		})

        await customerRepository.create({
			cpf: "111-111-111-99", 
			email: "felipedoe@gmail.com",
			gender: "M",
			name: "Felipe",
			numberPhone: "(61) 99550-2167",
			birth_data: new Date("2003-08-13")
		})


        const { customer } = await sut.execute()
		
		expect(customer.length).toEqual(2)
	});

});
