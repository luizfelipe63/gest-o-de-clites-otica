import express from 'express';
import { registerController } from './register-controller';
import { loginController } from './login-controller';
import { logoutController } from './logout-controller';

export const router = express.Router();

router.post('/register', registerController);

router.post('/login', loginController);

router.post('/logout', logoutController);
