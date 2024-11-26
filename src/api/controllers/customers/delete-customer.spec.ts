import request from 'supertest'
import { expect, describe, it } from 'vitest'
import { app } from '../../../app'

describe('Delete customer (e2e)', () => {

  it('must be able to delete customer', async () => {
    const createCustomer = await request(app).post('/customer/new').send({
      cpf: "7061799111",
      email: "johdoe@gmail.com",
      gender: "M",
      name: "Joh Doe",
      numberPhone: "61994502167"
    })

    const customerId = createCustomer.body.id

    const response = await request(app).delete('/customer/delete').send({
        customerId
    })


    expect(response.statusCode).toEqual(204)
  })
})