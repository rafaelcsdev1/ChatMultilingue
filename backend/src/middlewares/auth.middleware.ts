import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/app-error';
import { verifyAccessToken } from '../utils/jwt';

export function authenticate(req: Request, _res: Response, next: NextFunction) {
  const authorization = req.headers.authorization;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new AppError('Token de autenticação ausente', 401));
  }

  const token = authorization.replace('Bearer ', '').trim();

  try {
    const payload = verifyAccessToken(token);
    req.user = payload;
    return next();
  } catch (error) {
    return next(new AppError('Token inválido ou expirado', 401));
  }
}
