import type { LanguageLevel } from '@prisma/client';
import prisma from '../prisma/client';

export const UsersService = {
  getCurrentUser: async (userId: string) => {
    return prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        fullName: true,
        role: true,
        nativeLanguageId: true,
        targetLanguageId: true,
        level: true,
        objectives: true,
        preferences: true,
        createdAt: true,
        updatedAt: true,
        lastLogin: true
      }
    });
  },

  updateUserLevel: async (userId: string, level: LanguageLevel) => {
    return prisma.user.update({
      where: { id: userId },
      data: { level },
      select: {
        id: true,
        email: true,
        fullName: true,
        role: true,
        nativeLanguageId: true,
        targetLanguageId: true,
        level: true,
        objectives: true,
        preferences: true,
        createdAt: true,
        updatedAt: true,
        lastLogin: true
      }
    });
  }
};
