import { Employee } from './employee.model';

export interface EmployeeRepository {
  findById(id: string): Promise<Employee | null>;
  create(employee: Employee): Promise<Employee>;
}
