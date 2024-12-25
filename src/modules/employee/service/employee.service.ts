import { CreateEmployeeDto } from '../handler/dto/create-employee.dto';
import { Employee } from '../model/employee.model';
import { EmployeeRepository } from '../model/employee.repository';

export class EmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async create(dto: CreateEmployeeDto): Promise<Employee> {
    const employee = Employee.build({ 
      name: dto.name, 
      email: dto.email, 
      role: dto.role 
    });

    await this.employeeRepository.create(employee);

    return employee;
  }
}
