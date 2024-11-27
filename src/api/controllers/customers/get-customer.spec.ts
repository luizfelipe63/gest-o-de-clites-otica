import request from 'supertest'
import { expect, describe, it} from 'vitest'
import { app } from '../../../app'

describe('Get customer (e2e)', () => {

  it('must be possible to search for a client', async () => {
    const createCustomer = await request(app).post('/customer/new').send({
        cpf: "7061799111",
        email: "johdoe@gmail.com",
        gender: "M",
        name: "Joh Doe",
        numberPhone: "61994502167",
        birth_data: new Date("2003-08-13")
    })

    const customerId = createCustomer.body.id

    const response = await request(app).get(`/customer/${customerId}`)

    expect(response.statusCode).toEqual(200)
    expect(response.body.customer).toEqual(expect.objectContaining({
        email: "johdoe@gmail.com"
    }))
  })
})
