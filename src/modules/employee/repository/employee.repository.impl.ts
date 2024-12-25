import { Employee } from '../model/employee.model';
import { EmployeeRepository } from '../model/employee.repository';

export class EmployeeRepositoryImpl implements EmployeeRepository {
  async findById(id: string): Promise<Employee | null> {
    try {
      const employee = await Employee.findByPk(id);
      return employee;
    } catch (error) {
      console.error('Error finding employee by id:', error);
      return null;
    }
  }

  async create(employee: Employee): Promise<Employee> {
    try {
      const newEmployee = await Employee.create({
        name: employee.name,
        email: employee.email,
        role: employee.role,
      });

      return newEmployee;
    } catch (error) {
      console.error('Error creating employee:', error);
      throw new Error('Error creating employee');
    }
  }
}
