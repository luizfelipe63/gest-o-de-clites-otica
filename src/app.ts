import express, { Request, request, Response, response } from 'express'
import {errorHandler} from './middleware/errorHandler'
import { PrismaClient } from '@prisma/client'

export const app = express()

const prisma = new PrismaClient()

app.use(errorHandler as any)
app.use(express.json());

app.post('/', async (req, res) => {
    
    const { email, name } = req.body

    const post = await prisma.user.create({
        data:{
            email,
            name
        }
    })

    return res
    .status(201)
    .json({data: {post}});
  })
