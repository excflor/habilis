import { CreateProjectDto } from '../handler/dto/create-project.dto';
import { UpdateProjectDto } from '../handler/dto/update-project.dto';
import { Project } from '../model/project.model';
import { ProjectRepository } from '../repository/project.repository';

export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async create(dto: CreateProjectDto): Promise<Project> {
    const projectData = Project.build({
      name: dto.name,
      deadline: dto.deadline,
      status: dto.status,
    });

    const project = await this.projectRepository.create(projectData);

    return project;
  }

  async findAll(): Promise<Project[]> {
    const projects = await this.projectRepository.findAll();

    return projects;
  }

  async findById(id: string): Promise<Project | null> {
    const project = await this.projectRepository.findById(id);

    return project;
  }

  async update(id: string, dto: UpdateProjectDto): Promise<Project> {
    const existingProject = await this.projectRepository.findById(id);

    if (!existingProject) {
      throw new Error(`Project with ID ${id} not found`);
    }

    const updatedProject = await this.projectRepository.update(existingProject, {
      name: dto.name ?? existingProject.name,
      deadline: dto.deadline ?? existingProject.deadline,
      status: dto.status ?? existingProject.status,
    });

    return updatedProject;
  }

  async delete(id: string): Promise<void> {
    const existingProject = await this.projectRepository.findById(id);

    if (!existingProject) {
      throw new Error(`Project with ID ${id} not found`);
    }

    await this.projectRepository.delete(existingProject);
  }
}
