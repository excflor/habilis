import { Employee } from '../model/employee.model';

export interface EmployeeRepository {
  create(employee: Employee): Promise<Employee>;
  findAll(): Promise<Employee[]>;
  findById(id: string): Promise<Employee | null>;
  update(employee: Employee, employeeData: Partial<Employee>): Promise<Employee>;
  delete(employee: Employee): Promise<void>;
}
