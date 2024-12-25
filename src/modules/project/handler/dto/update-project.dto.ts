export class UpdateProjectDto {
  name?: string;
  deadline?: Date;
  status?: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
}
