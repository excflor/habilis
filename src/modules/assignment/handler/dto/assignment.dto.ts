export interface EmployeeDto {
  id: string;
  name: string;
  email: string;
}

export interface ProjectDto {
  id: string;
  name: string;
  status: string;
  deadline: Date;
}

export interface ProjectWithEmployeesDto {
  id: string;
  name: string;
  deadline: Date;
  employees: EmployeeDto[];
}

export interface EmployeeWithProjectsDto {
  id: string;
  name: string;
  email: string;
  projects: ProjectDto[];
}
