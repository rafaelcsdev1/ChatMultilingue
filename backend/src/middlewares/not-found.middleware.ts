import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/app-error';

export function notFoundHandler(_req: Request, _res: Response, next: NextFunction) {
  next(new AppError('Recurso não encontrado', 404));
}
