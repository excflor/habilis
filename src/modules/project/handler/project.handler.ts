import { Request, Response } from 'express';
import { ProjectService } from '../service/project.service';
import { ProjectRepositoryImpl } from '../repository/project.repository.impl';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

export class ProjectHandler {
  private projectService: ProjectService;

  constructor() {
    const projectRepository = new ProjectRepositoryImpl();
    this.projectService = new ProjectService(projectRepository);
  }

  create = async (req: Request, res: Response) => {
    try {
      const dto: CreateProjectDto = req.body;
      const project = await this.projectService.create(dto);

      res.status(201).json(project);
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
      const projects = await this.projectService.findAll();

      res.status(200).json(projects);
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
      const project = await this.projectService.findById(id);

      if (!project) {
        res.status(404).json({ message: `Project with ID ${id} not found` });
        return;
      }

      res.status(200).json(project);
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
      const dto: UpdateProjectDto = req.body;
      const updatedProject = await this.projectService.update(id, dto);

      if (!updatedProject) {
        res.status(404).json({ message: `Project with ID ${id} not found` });
        return;
      }

      res.status(200).json(updatedProject);
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

      await this.projectService.delete(id);

      res.status(200).json({ message: 'Project has been deleted' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'An unexpected error occurred' });
      }
    }
  };
}
