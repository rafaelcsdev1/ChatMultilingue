import { z } from 'zod';

export const updateLevelSchema = z.object({
  level: z.enum(['A1', 'A2', 'B1', 'B2', 'C1', 'C2'])
});
