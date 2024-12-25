import { Request, Response } from 'express';
import { EmployeeService } from '../service/employee.service';
import { EmployeeRepositoryImpl } from '../repository/employee.repository.impl';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

export class EmployeeHandler {
  private employeeService: EmployeeService;

  constructor() {
    const employeeRepository = new EmployeeRepositoryImpl();
    this.employeeService = new EmployeeService(employeeRepository);
  }

  create = async (req: Request, res: Response) => {
    try {
      const dto: CreateEmployeeDto = req.body;
      const employee = await this.employeeService.create(dto);

      res.status(201).json(employee);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'An unexpected error occurred' });
      }
    }
  };

  findAll = async (req: Request, res: Response) => {
    try {
      const employees = await this.employeeService.findAll();

      res.status(200).json(employees);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'An unexpected error occurred' });
      }
    }
  };

  findById = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const employee = await this.employeeService.findById(id);

      res.status(200).json(employee);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'An unexpected error occurred' });
      }
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const dto: UpdateEmployeeDto = req.body;
      const updatedEmployee = await this.employeeService.update(id, dto);

      if (!updatedEmployee) {
        res.status(404).json({ message: `Employee with ID ${id} not found` });
        return;
      }

      res.status(200).json(updatedEmployee);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'An unexpected error occurred' });
      }
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;

      await this.employeeService.delete(id);

      res.status(200).json({ message: 'data has been deleted' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'An unexpected error occurred' });
      }
    }
  };
}
