import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/app-error';
import { UsersService } from '../services/users.service';

export async function getCurrentUser(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      throw new AppError('Usuário não autenticado', 401);
    }

    const user = await UsersService.getCurrentUser(userId);

    if (!user) {
      throw new AppError('Usuário não encontrado', 404);
    }

    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
}

export async function updateCurrentUserLevel(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      throw new AppError('Usuário não autenticado', 401);
    }

    const { level } = req.body;
    const user = await UsersService.updateUserLevel(userId, level);

    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
}
