import type { Request, Response, NextFunction } from 'express';
import type { AnyZodObject } from 'zod';
import { AppError } from '../utils/app-error';

export function validateBody(schema: AnyZodObject) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const errorMessages = result.error.errors.map((error) => ({
        path: error.path.join('.'),
        message: error.message
      }));

      return next(new AppError('Dados de entrada inválidos', 400, errorMessages));
    }

    req.body = result.data;

    return next();
  };
}
