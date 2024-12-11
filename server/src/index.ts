// import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';


const app = express();
// const prisma = new PrismaClient();


app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Bem vindo a API taks manager');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


