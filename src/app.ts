import express from 'express'
import {errorHandler} from './middleware/errorHandler'
import {router} from './api/controllers/router';


export const app = express()

app.use(express.json());

app.use('/', router)


app.use(errorHandler as any)

