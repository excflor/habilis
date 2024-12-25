import { z } from 'zod';

export const UpdateProjectSchema = z.object({
  name: z.string().min(1, 'project name must be a non-empty string').optional(),
  deadline: z.date().optional(),
  status: z.enum(['PENDING', 'IN_PROGRESS', 'COMPLETED']).optional(),
});

export type UpdateProjectDto = z.infer<typeof UpdateProjectSchema>;
