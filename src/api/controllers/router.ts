import { Router } from 'express';
import { registerCustomer } from './create-customer'
import { readCustomer } from './read-customer';

export const router = Router()

router.post('/customer', registerCustomer)
router.get('/client', readCustomer)



