import * as jwt from 'jsonwebtoken';
import {
  JWT_SECRET,
  JWT_EXPIRES_IN,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRES_IN
} from '../config/env';
import type { TokenPayload } from '../types/auth';

const accessSecret = JWT_SECRET as jwt.Secret;
const refreshSecret = REFRESH_TOKEN_SECRET as jwt.Secret;

export function signAccessToken(payload: TokenPayload) {
  return jwt.sign(payload, accessSecret, { expiresIn: JWT_EXPIRES_IN } as jwt.SignOptions);
}

export function signRefreshToken(payload: TokenPayload) {
  return jwt.sign(payload, refreshSecret, { expiresIn: REFRESH_TOKEN_EXPIRES_IN } as jwt.SignOptions);
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, accessSecret) as TokenPayload;
}

export function verifyRefreshToken(token: string) {
  return jwt.verify(token, refreshSecret) as TokenPayload;
}
