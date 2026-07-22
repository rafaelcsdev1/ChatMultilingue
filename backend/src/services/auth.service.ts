import bcrypt from 'bcryptjs';
import prisma from '../prisma/client';
import { AppError } from '../utils/app-error';
import {
  signAccessToken,
  signRefreshToken,
  verifyRefreshToken,
} from '../utils/jwt';
import type { TokenPayload } from '../types/auth';

export const AuthService = {
  register: async ({
    email,
    password,
    fullName,
  }: {
    email: string;
    password: string;
    fullName?: string;
  }) => {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      throw new AppError('Email já está em uso', 409);
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        fullName: fullName?.trim() || undefined,
      },
    });

    const tokens = await AuthService.createTokens(
      user.id,
      user.email,
      user.role,
    );

    return {
      user: AuthService.getSafeUser(user),
      tokens,
    };
  },

  login: async ({ email, password }: { email: string; password: string }) => {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new AppError('Email ou senha inválidos', 401);
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
      throw new AppError('Email ou senha inválidos', 401);
    }

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });

    const tokens = await AuthService.createTokens(
      updatedUser.id,
      updatedUser.email,
      updatedUser.role,
    );

    return {
      user: AuthService.getSafeUser(user),
      tokens,
    };
  },

  refresh: async ({ refreshToken }: { refreshToken: string }) => {
    const tokenPayload = verifyRefreshToken(refreshToken);

    const user = await prisma.user.findUnique({
      where: { id: tokenPayload.userId },
    });

    if (!user || !user.refreshTokenHash) {
      throw new AppError('Refresh token inválido', 401);
    }

    const refreshTokenMatches = await bcrypt.compare(
      refreshToken,
      user.refreshTokenHash,
    );

    if (!refreshTokenMatches) {
      throw new AppError('Refresh token inválido', 401);
    }

    return AuthService.createTokens(user.id, user.email, user.role);
  },

  createTokens: async (userId: string, email: string, role: string) => {
    const payload: TokenPayload = { userId, email, role };
    const accessToken = signAccessToken(payload);
    const refreshToken = signRefreshToken(payload);
    const refreshTokenHash = await bcrypt.hash(refreshToken, 10);

    await prisma.user.update({
      where: { id: userId },
      data: { refreshTokenHash },
    });

    return {
      accessToken,
      refreshToken,
    };
  },

  getSafeUser: (user: {
    id: string;
    email: string;
    fullName?: string | null;
    role: string;
    nativeLanguageId?: string | null;
    targetLanguageId?: string | null;
    level?: string | null;
    objectives?: string | null;
    preferences?: unknown | null;
    createdAt: Date;
    updatedAt: Date;
    lastLogin?: Date | null;
  }) => {
    return {
      id: user.id,
      email: user.email,
      fullName: user.fullName ?? null,
      role: user.role,
      nativeLanguageId: user.nativeLanguageId ?? null,
      targetLanguageId: user.targetLanguageId ?? null,
      level: user.level ?? null,
      objectives: user.objectives ?? null,
      preferences: user.preferences ?? null,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      lastLogin: user.lastLogin ?? null,
    };
  },
};
