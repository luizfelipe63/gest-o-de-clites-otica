import { Request, Response } from 'express';
import { prisma } from '../../../lib/prisma';

export async function registerController(req: Request, res: Response) {
  const { name, email, password } = req.body;
}
