import express from 'express';
import { errorHandler } from './middleware/errorHandler';
import { router } from './api/controllers/customers/router';
import { router as authRouter } from './api/controllers/authenticate/routes';

export const app = express();

app.use(express.json());

app.use('/', router);

app.use('/', authRouter);

app.use(errorHandler as any);
