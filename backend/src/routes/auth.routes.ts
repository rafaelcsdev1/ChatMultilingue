import { Router } from 'express';
import { login, register, refreshToken } from '../controllers/auth.controller';
import { validateBody } from '../middlewares/validation.middleware';
import { loginSchema, registerSchema, refreshSchema } from '../validations/auth.validation';

const router = Router();

router.post('/register', validateBody(registerSchema), register);
router.post('/login', validateBody(loginSchema), login);
router.post('/refresh', validateBody(refreshSchema), refreshToken);

export default router;
