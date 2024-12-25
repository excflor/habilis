import { Request, Response } from 'express';
import { AssignmentService } from '../service/assignment.service';
import { AssignmentRepositoryImpl } from '../repository/assignment.repository.impl';
import { formatResponse } from '../../../utils/response.util';
import { AssignEmployeesSchema } from './dto/assignment.dto';

export class AssignmentHandler {
  private assignmentService: AssignmentService;

  constructor() {
    const assignmentRepository = new AssignmentRepositoryImpl();
    this.assignmentService = new AssignmentService(assignmentRepository);
  }

  assignEmployeesToProject = async (req: Request, res: Response) => {
    const { projectId, employeeIds } = AssignEmployeesSchema.parse(req.body);
    const assignments = await this.assignmentService.assignEmployeesToProject(
      projectId,
      employeeIds
    );

    const response = formatResponse(200, 'success assign employees', assignments);

    res.status(201).json(response);
  };

  getEmployeesByProjectId = async (req: Request, res: Response) => {
    const projectId: string = req.params.id;

    const assignments = await this.assignmentService.getEmployeesByProjectId(projectId);
    const response = formatResponse(
      200,
      'success get list of employees assigned to project',
      assignments
    );

    res.status(200).json(response);
  };

  getProjectsByEmployeeId = async (req: Request, res: Response) => {
    const employeeId: string = req.params.id;

    const assignments = await this.assignmentService.getProjectsByEmployeeId(employeeId);
    const response = formatResponse(
      200,
      'success get list of projects assigned to employee',
      assignments
    );

    res.status(200).json(response);
  };
}
