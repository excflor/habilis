import { Assignment } from '../model/assignment.model';
import { Project } from '../../project/model/project.model';
import { Employee } from '../../employee/model/employee.model';
import { AssignmentRepository } from './assignment.repository';

export class AssignmentRepositoryImpl implements AssignmentRepository {
  async create(projectId: string, employeeIds: string[]): Promise<Assignment[]> {
    const assignments = employeeIds.map((employeeId) => ({
      employeeId,
      projectId,
      assignedAt: new Date(),
    }));

    const createdAssignments = await Assignment.bulkCreate(assignments);
    return createdAssignments;
  }

  async findByProjectId(projectId: string): Promise<Assignment[]> {
    return await Assignment.findAll({
      where: { projectId },
      include: [
        { model: Employee, attributes: ['id', 'name', 'email'] },
        { model: Project, attributes: ['id', 'name', 'status', 'deadline'] },
      ],
    });
  }

  async findByEmployeeId(employeeId: string): Promise<Assignment[]> {
    return await Assignment.findAll({
      where: { employeeId },
      include: [
        { model: Employee, attributes: ['id', 'name', 'email'] },
        { model: Project, attributes: ['id', 'name', 'status'] },
      ],
    });
  }
}
