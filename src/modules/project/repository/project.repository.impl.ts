import { Project } from '../model/project.model';
import { ProjectRepository } from './project.repository';

export class ProjectRepositoryImpl implements ProjectRepository {
  async create(project: Project): Promise<Project> {
    try {
      const newProject = await Project.create({
        name: project.name,
        deadline: project.deadline,
        status: project.status,
      });

      return newProject;
    } catch (error) {
      console.error('Error creating project:', error);
      throw new Error('Error creating project');
    }
  }

  async findAll(): Promise<Project[]> {
    try {
      const projects = await Project.findAll({
        where: { deletedAt: null }, // Exclude soft-deleted projects
      });

      return projects;
    } catch (error) {
      console.error('Error finding projects:', error);
      throw new Error('Error finding projects');
    }
  }

  async findById(id: string): Promise<Project | null> {
    try {
      const project = await Project.findOne({
        where: { id, deletedAt: null }, // Exclude soft-deleted projects
      });

      return project;
    } catch (error) {
      console.error('Error finding project by ID:', error);
      return null;
    }
  }

  async update(project: Project, projectData: Partial<Project>): Promise<Project> {
    try {
      await project.update(projectData);
      return project;
    } catch (error) {
      console.error('Error updating project:', error);
      throw new Error('Error updating project');
    }
  }

  async delete(project: Project): Promise<void> {
    try {
      await project.destroy(); // Soft delete (sets the deletedAt field)
    } catch (error) {
      console.error('Error deleting project:', error);
      throw new Error('Error deleting project');
    }
  }
}
