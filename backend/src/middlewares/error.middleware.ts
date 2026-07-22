import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/app-error';

export function errorHandler(err: Error | AppError, _req: Request, res: Response, _next: NextFunction) {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const message = err instanceof AppError ? err.message : 'Erro interno do servidor';
  const details = err instanceof AppError ? err.details : undefined;

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.error(err);
  }

  res.status(statusCode).json({
    status: 'error',
    message,
    details
  });
}
