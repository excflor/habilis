import { z } from 'zod';

export interface EmployeeDto {
  id: string;
  name: string;
  email: string;
}

export interface ProjectDto {
  id: string;
  name: string;
  status: string;
  deadline: Date;
}

export interface ProjectWithEmployeesDto {
  id: string;
  name: string;
  deadline: Date;
  employees: EmployeeDto[];
}

export interface EmployeeWithProjectsDto {
  id: string;
  name: string;
  email: string;
  projects: ProjectDto[];
}

export const AssignEmployeesSchema = z.object({
  projectId: z.string().uuid('invalid project id format'),
  employeeIds: z
    .array(z.string().uuid('invalid employee id format'))
    .nonempty('employee ids cannot be empty'),
});
