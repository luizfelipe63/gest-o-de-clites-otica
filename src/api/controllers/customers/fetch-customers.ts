import { Response } from "express"
import { makeFetchCustomersUseCase } from "../../../use-cases/factories/make-fetch-customers-use-case"

export async function fetchCustomers(res: Response){

    const fetchCustomersUseCase = makeFetchCustomersUseCase()

    const {customer} = await fetchCustomersUseCase.execute()

    return res.status(200).send(customer)

}