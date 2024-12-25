import { Request, Response } from 'express';
import { EmployeeService } from '../service/employee.service';
import { EmployeeRepositoryImpl } from '../repository/employee.repository.impl';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ErrorHandler } from '../../../utils/error.util';
import { formatResponse } from '../../../utils/response.util';
import { NotFoundError } from '../../../utils/custom-error.util';

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
      const response = formatResponse(201, 'success create employee', employee);

      res.status(201).json(response);
    } catch (error) {
      ErrorHandler.handle(res, error);
    }
  };

  findAll = async (req: Request, res: Response) => {
    try {
      const employees = await this.employeeService.findAll();
      const response = formatResponse(200, 'success get employees', employees);

      res.status(200).json(response);
    } catch (error) {
      ErrorHandler.handle(res, error);
    }
  };

  findById = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const employee = await this.employeeService.findById(id);

      if (!employee) {
        throw new NotFoundError(`employee with id ${id} not found`);
      }

      const response = formatResponse(200, 'success get employee', employee);
      res.status(200).json(response);
    } catch (error) {
      ErrorHandler.handle(res, error);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const dto: UpdateEmployeeDto = req.body;
      const updatedEmployee = await this.employeeService.update(id, dto);

      if (!updatedEmployee) {
        throw new NotFoundError(`employee with id ${id} not found`);
      }

      const response = formatResponse(200, 'success update employee', updatedEmployee);
      res.status(200).json(response);
    } catch (error) {
      ErrorHandler.handle(res, error);
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;

      await this.employeeService.delete(id);
      const response = formatResponse(200, 'success delete employee', null);

      res.status(200).json(response);
    } catch (error) {
      ErrorHandler.handle(res, error);
    }
  };
}
