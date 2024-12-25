import { Employee } from '../model/employee.model';
import { EmployeeRepository } from '../model/employee.repository';

export class EmployeeRepositoryImpl implements EmployeeRepository {
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

  async findAll(): Promise<Employee[]> {
    try {
      const employees = await Employee.findAll({
        where: { deletedAt: null },
      });

      return employees;
    } catch (error) {
      console.error('Error finding employees:', error);
      throw new Error('Error finding employees');
    }
  }

  async findById(id: string): Promise<Employee | null> {
    try {
      const employee = await Employee.findOne({
        where: { id, deletedAt: null },
      });

      return employee;
    } catch (error) {
      console.error('Error finding employee by ID:', error);
      return null;
    }
  }

  async update(employee: Employee, employeeData: Partial<Employee>): Promise<Employee> {
    try {
      await employee.update(employeeData);
      return employee;
    } catch (error) {
      console.error('Error updating employee:', error);
      throw new Error('Error updating employee');
    }
  }

  async delete(employee: Employee): Promise<void> {
    try {
      await employee.destroy();
    } catch (error) {
      console.error('Error deleting employee:', error);
      throw new Error('Error deleting employee');
    }
  }
}
