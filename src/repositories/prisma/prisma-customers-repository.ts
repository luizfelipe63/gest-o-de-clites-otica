import { Prisma } from "@prisma/client";
import { CustomersRepository } from "../customers-repository";
import { prisma } from "../../lib/prisma";

export class PrismaCustormersRepository implements CustomersRepository {
	async create(data: Prisma.CustomerCreateInput) {
		const customer = await prisma.customer.create({
			data,
		});

		return customer;
	}

	async findyById(id: string) {
		const customer = await prisma.customer.findUnique({
			where:{
				id
			}
		})

		return customer
	}

	async findyByCpf(cpf: string) {
		const customer = await prisma.customer.findUnique({
			where:{
				cpf
			}
		})

		return customer
	}

	async findMany() {
		const customer = await prisma.customer.findMany({
			orderBy:{
				id: "asc"
			},
			take: 5
		})

		return customer
	}

	async update(id: string, data: Prisma.CustomerUpdateInput){
		const customer = await prisma.customer.update({
			where: {
				id
			},
			data
		})

		return customer
	}

	async delete(id: string) {
		const customer = await prisma.customer.delete({
			where:{
				id
			}
		});

		return customer;
	}
}