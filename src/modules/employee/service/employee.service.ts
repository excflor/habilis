import { CreateEmployeeDto } from '../handler/dto/create-employee.dto';
import { UpdateEmployeeDto } from '../handler/dto/update-employee.dto';
import { Employee } from '../model/employee.model';
import { EmployeeRepository } from '../model/employee.repository';

export class EmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async create(dto: CreateEmployeeDto): Promise<Employee> {
    const employee = Employee.build({
      name: dto.name,
      email: dto.email,
      role: dto.role,
    });

    await this.employeeRepository.create(employee);

    return employee;
  }

  async findAll(): Promise<Employee[]> {
    const employees = await this.employeeRepository.findAll();

    return employees;
  }

  async findById(id: string): Promise<Employee | null> {
    const employee = await this.employeeRepository.findById(id);

    return employee;
  }

  async update(id: string, dto: UpdateEmployeeDto): Promise<Employee> {
    const existingEmployee = await this.employeeRepository.findById(id);

    if (!existingEmployee) {
      throw new Error(`Employee with ID ${id} not found`);
    }

    const updatedEmployee = await this.employeeRepository.update(existingEmployee, {
      name: dto.name ?? existingEmployee.name,
      email: dto.email ?? existingEmployee.email,
      role: dto.role ?? existingEmployee.role,
    });

    return updatedEmployee;
  }

  async delete(id: string): Promise<void> {
    const existingEmployee = await this.employeeRepository.findById(id);

    if (!existingEmployee) {
      throw new Error(`Employee with ID ${id} not found`);
    }

    await this.employeeRepository.delete(existingEmployee);
  }
}
