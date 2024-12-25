import { Request, Response } from 'express';
import { AssignmentService } from '../service/assignment.service';
import { AssignmentRepositoryImpl } from '../repository/assignment.repository.impl';

export class AssignmentHandler {
  private assignmentService: AssignmentService;

  constructor() {
    const assignmentRepository = new AssignmentRepositoryImpl();
    this.assignmentService = new AssignmentService(assignmentRepository);
  }

  assignEmployeesToProject = async (req: Request, res: Response) => {
    try {
      const { projectId, employeeIds } = req.body;
      const assignments = await this.assignmentService.assignEmployeesToProject(
        projectId,
        employeeIds
      );
      res.status(201).json(assignments);
    } catch (error) {
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  };

  getEmployeesByProjectId = async (req: Request, res: Response) => {
    try {
      const projectId: string = req.params.id;
      const assignments = await this.assignmentService.getEmployeesByProjectId(projectId);
      res.status(200).json(assignments);
    } catch (error) {
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  };

  getProjectsByEmployeeId = async (req: Request, res: Response) => {
    try {
      const employeeId: string = req.params.id;
      const assignments = await this.assignmentService.getProjectsByEmployeeId(employeeId);
      res.status(200).json(assignments);
    } catch (error) {
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  };
}
