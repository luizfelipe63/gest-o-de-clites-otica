import { customers, Prisma } from "@prisma/client";
import { CustomersRepository } from "../customers-repository";
import { prisma } from "../../lib/prisma";

export class PrismaCustormersRepository implements CustomersRepository {
	async create(data: Prisma.customersCreateInput) {
		const customers = await prisma.customers.create({
			data,
		});

		return customers;
	}

	async findyById(id: string) {
		const customer = await prisma.customers.findUnique({
			where:{
				id
			}
		})

		return customer
	}

	async update(data: customers){
		const customer = await prisma.customers.update({
			where:{
				id: data.id
			},
			data:{
				name: data.name,
				email: data.email
			}
		})

		return customer
	}

	async delete(id: string) {
		const customers = await prisma.customers.delete({
			where:{
				id
			}
		});

		return customers;
	}
}