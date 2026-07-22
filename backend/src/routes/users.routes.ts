import { Router } from 'express';
import { getCurrentUser, updateCurrentUserLevel } from '../controllers/users.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { validateBody } from '../middlewares/validation.middleware';
import { updateLevelSchema } from '../validations/user.validation';

const router = Router();

router.get('/me', authenticate, getCurrentUser);
router.patch('/me', authenticate, validateBody(updateLevelSchema), updateCurrentUserLevel);

export default router;
