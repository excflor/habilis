import { z } from 'zod';

export const CreateProjectSchema = z.object({
  name: z.string().min(1, 'project name is required'),
  deadline: z.preprocess(
    (value) => (typeof value === 'string' ? new Date(value) : value),
    z.date()
  ),
  status: z.enum(['PENDING', 'IN_PROGRESS', 'COMPLETED']),
});

export type CreateProjectDto = z.infer<typeof CreateProjectSchema>;
