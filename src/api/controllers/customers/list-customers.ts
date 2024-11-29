import { Response } from "express"
import { makeListCustomersUseCase } from "../../../use-cases/factories/make-list-customers-use-case"

export async function listCustomers(res: Response){

    const fetchCustomersUseCase = makeListCustomersUseCase()

    const {customer} = await fetchCustomersUseCase.execute()

    return res.status(200).send(customer)

}