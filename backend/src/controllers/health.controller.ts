import type { Request, Response, NextFunction } from 'express';
import { getHealthStatus } from '../services/health.service';

export function getHealth(_req: Request, res: Response, _next: NextFunction) {
  const status = getHealthStatus();

  return res.status(200).json(status);
}
