export class CreateProjectDto {
  name!: string;
  deadline!: Date;
  status!: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
}
