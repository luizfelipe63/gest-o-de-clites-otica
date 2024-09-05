import express from 'express';
import { registerCustomer } from './register-customer'

const router = express.Router();

router.post('/', registerCustomer)

export default router



