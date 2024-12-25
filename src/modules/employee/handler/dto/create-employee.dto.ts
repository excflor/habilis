import { z } from 'zod';

export const CreateEmployeeSchema = z.object({
  name: z.string().min(1, 'name is required'),
  email: z.string().email('invalid email format'),
  role: z.string().min(1, 'role is required'),
});

export type CreateEmployeeDto = z.infer<typeof CreateEmployeeSchema>;
