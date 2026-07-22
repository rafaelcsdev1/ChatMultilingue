import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
export const NODE_ENV = process.env.NODE_ENV ?? 'development';
export const DATABASE_URL = process.env.DATABASE_URL ?? '';
export const JWT_SECRET = process.env.JWT_SECRET ?? 'secret_dev';
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? '15m';
export const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET ?? 'refresh_secret_dev';
export const REFRESH_TOKEN_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN ?? '7d';
