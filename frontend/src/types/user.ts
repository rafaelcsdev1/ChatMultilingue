export type LanguageLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface UserProfile {
  id: string;
  email: string;
  fullName?: string | null;
  role: string;
  nativeLanguageId?: string | null;
  targetLanguageId?: string | null;
  level?: LanguageLevel | null;
  objectives?: string | null;
  preferences?: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
  lastLogin?: string | null;
}
