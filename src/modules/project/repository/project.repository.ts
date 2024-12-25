import { Project } from '../model/project.model';

export interface ProjectRepository {
  create(project: Project): Promise<Project>;
  findAll(): Promise<Project[]>;
  findById(id: string): Promise<Project | null>;
  update(project: Project, projectData: Partial<Project>): Promise<Project>;
  delete(project: Project): Promise<void>;
}
