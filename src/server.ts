import express, { NextFunction, Request, Response } from 'express';
import { errors } from 'celebrate';
import 'express-async-errors';

import routes from './application/modules/user/routes';

import './database';
import AppError from './application/errors/AppError';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => console.log('Rodando na porta 3333'));
