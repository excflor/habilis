import { z } from 'zod';

export const UpdateEmployeeSchema = z.object({
  name: z.string().min(1, 'name is required').optional(),
  email: z.string().email('invalid email format').optional(),
  role: z.string().min(1, 'role is required').optional(),
});

export type UpdateEmployeeDto = z.infer<typeof UpdateEmployeeSchema>;
