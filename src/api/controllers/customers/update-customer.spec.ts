import request from 'supertest'
import { expect, describe, it } from 'vitest'
import { app } from '../../../app'

describe('Update customer (e2e)', () => {

  it('must be able to update customer', async () => {
    const createCustomer = await request(app).post('/customer/new').send({
        cpf: "7061799111",
        email: "johdoe@gmail.com",
        gender: "M",
        name: "Joh Doe",
        numberPhone: "61994502167",
        birth_data: new Date("2003-08-13")
      })
  
      const id = createCustomer.body.id
  
      const response = await request(app).put('/customer/update').send({
          id,
          cpf: "7061799112",
          email: "luizfe@gmail.com",
          gender: "F",
          name: "Felipe",
          numberPhone: "61994502168"
      })

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual(expect.objectContaining({
        email: "luizfe@gmail.com"
    }))
  })
})