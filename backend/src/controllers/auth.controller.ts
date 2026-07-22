import type { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/auth.service';

export async function register(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = await AuthService.register(req.body);
    return res.status(201).json(payload);
  } catch (error) {
    return next(error);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = await AuthService.login(req.body);
    return res.status(200).json(payload);
  } catch (error) {
    return next(error);
  }
}

export async function refreshToken(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = await AuthService.refresh(req.body);
    return res.status(200).json(payload);
  } catch (error) {
    return next(error);
  }
}
