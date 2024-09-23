import { Router } from 'express';
import { registerCustomer } from './create-customer'
import { readCustomer } from './read-customer';
import { deleteCustomer } from './delete-customer';

export const router = Router()

router.post('/register-customer', registerCustomer)
router.get('/customer', readCustomer)
router.delete('/delete-customer', deleteCustomer)



