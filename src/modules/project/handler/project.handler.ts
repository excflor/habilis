import { Request, Response } from 'express';
import { ProjectService } from '../service/project.service';
import { ProjectRepositoryImpl } from '../repository/project.repository.impl';
import { formatResponse } from '../../../utils/response.util';
import { NotFoundError } from '../../../utils/custom-error.util';
import { CreateProjectSchema } from './dto/create-project.dto';
import { UpdateProjectSchema } from './dto/update-project.dto';

export class ProjectHandler {
  private projectService: ProjectService;

  constructor() {
    const projectRepository = new ProjectRepositoryImpl();
    this.projectService = new ProjectService(projectRepository);
  }

  create = async (req: Request, res: Response) => {
    const dto = CreateProjectSchema.parse(req.body);
    const project = await this.projectService.create(dto);
    const response = formatResponse(200, 'success create project', project);

    res.status(201).json(response);
  };

  findAll = async (req: Request, res: Response) => {
    const projects = await this.projectService.findAll();
    const response = formatResponse(200, 'success get projects', projects);

    res.status(200).json(response);
  };

  findById = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const project = await this.projectService.findById(id);

    if (!project) {
      throw new NotFoundError(`project with id ${id} not found`);
    }

    const response = formatResponse(200, 'success get project', project);

    res.status(200).json(response);
  };

  update = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const dto = UpdateProjectSchema.parse(req.body);
    const updatedProject = await this.projectService.update(id, dto);

    if (!updatedProject) {
      throw new NotFoundError(`project with id ${id} not found`);
    }

    const response = formatResponse(200, 'success update project', updatedProject);

    res.status(200).json(response);
  };

  delete = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    await this.projectService.delete(id);
    const response = formatResponse(200, 'success delete project', null);

    res.status(200).json(response);
  };
}
