import { Request, Response } from 'express';
import { EmployeeService } from '../service/employee.service';
import { EmployeeRepositoryImpl } from '../repository/employee.repository.impl';
import { CreateEmployeeDto } from './dto/create-employee.dto';

export class EmployeeHandler {
  private employeeService: EmployeeService;

  constructor() {
    const employeeRepository = new EmployeeRepositoryImpl();
    this.employeeService = new EmployeeService(employeeRepository);
  }

  create = async (req: Request, res: Response) => {
    try {
      const dto: CreateEmployeeDto = req.body;
      const user = await this.employeeService.create(dto);
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'An unexpected error occurred' });
      }
    }
  };
}
