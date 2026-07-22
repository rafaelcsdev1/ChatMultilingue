import { Router } from 'express';
import { getCurrentUser } from '../controllers/users.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.get('/me', authenticate, getCurrentUser);

export default router;
