import { Assignment } from '../model/assignment.model';

export interface AssignmentRepository {
  create(projectId: string, employeeIds: string[]): Promise<Assignment[]>;
  findByProjectId(projectId: string): Promise<Assignment[]>;
  findByEmployeeId(employeeId: string): Promise<Assignment[]>;
}
