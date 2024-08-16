import express from 'express'
import {errorHandler} from './middleware/errorHandler'


export const app = express()

app.use(errorHandler as any)

