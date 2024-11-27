import request from 'supertest'
import { expect, describe, it } from 'vitest'
import { app } from '../../../app'

describe('Register customer (e2e)', () => {

  it('must be able to register customer', async () => {
    const response = await request(app).post('/customer/new').send({
      cpf: "7061799111",
      email: "johdoe@gmail.com",
      gender: "M",
      name: "Joh Doe",
      numberPhone: "61994502167",
      birth_data: new Date("2003-08-13")
    })


    expect(response.statusCode).toEqual(201)
  })
})
