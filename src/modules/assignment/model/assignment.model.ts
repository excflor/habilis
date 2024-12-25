import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
} from 'sequelize-typescript';
import { Employee } from '../../employee/model/employee.model';
import { Project } from '../../project/model/project.model';

@Table({ tableName: 'assignments' })
export class Assignment extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id!: number;

  @ForeignKey(() => Employee)
  @Column({
    field: 'employee_id',
    type: DataType.UUID,
    allowNull: false,
  })
  employeeId!: string;

  @ForeignKey(() => Project)
  @Column({
    field: 'project_id',
    type: DataType.UUID,
    allowNull: false,
  })
  projectId!: string;

  @Column({
    field: 'assigned_at',
    type: DataType.DATE,
    allowNull: true,
  })
  assignedAt?: Date;

  @CreatedAt
  @Column({
    field: 'created_at',
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: true,
  })
  createdAt?: Date;

  @UpdatedAt
  @Column({
    field: 'updated_at',
    type: DataType.DATE,
    allowNull: true,
  })
  updatedAt?: Date;

  @BelongsTo(() => Employee)
  employee!: Employee;

  @BelongsTo(() => Project)
  project!: Project;
}
