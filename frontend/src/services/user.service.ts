import type { LanguageLevel, UserProfile } from '../types/user';
import { apiFetch } from './api';

const USER_ENDPOINT = '/api/users/me';

export const UserService = {
  getCurrentUser: async () => apiFetch<UserProfile>(USER_ENDPOINT),
  updateUserLevel: async (level: LanguageLevel) =>
    apiFetch<UserProfile>(USER_ENDPOINT, {
      method: 'PATCH',
      body: JSON.stringify({ level })
    })
};
