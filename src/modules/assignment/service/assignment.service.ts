import { AssignmentRepository } from '../repository/assignment.repository';
import { Assignment } from '../model/assignment.model';
import { EmployeeWithProjectsDto, ProjectWithEmployeesDto } from '../handler/dto/assignment.dto';

export class AssignmentService {
  constructor(private readonly assignmentRepository: AssignmentRepository) {}

  async assignEmployeesToProject(projectId: string, employeeIds: string[]): Promise<Assignment[]> {
    return await this.assignmentRepository.create(projectId, employeeIds);
  }

  async getEmployeesByProjectId(projectId: string): Promise<ProjectWithEmployeesDto> {
    const data = await this.assignmentRepository.findByProjectId(projectId);

    const projectData: ProjectWithEmployeesDto = {
      id: data[0].project.id!,
      name: data[0].project.name,
      deadline: data[0].project.deadline,
      employees: data.map((assignment) => ({
        id: assignment.employee.id!,
        name: assignment.employee.name,
        email: assignment.employee.email,
      })),
    };

    return projectData;
  }

  async getProjectsByEmployeeId(employeeId: string): Promise<EmployeeWithProjectsDto> {
    const data = await this.assignmentRepository.findByEmployeeId(employeeId);

    const employeeData: EmployeeWithProjectsDto = {
      id: data[0].employee.id!,
      name: data[0].employee.name,
      email: data[0].employee.email,
      projects: data.map((assignment) => ({
        id: assignment.project.id!,
        name: assignment.project.name,
        status: assignment.project.status,
        deadline: assignment.project.deadline,
      })),
    };

    return employeeData;
  }
}
