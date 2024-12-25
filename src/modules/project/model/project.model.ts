import {
  Column,
  Model,
  PrimaryKey,
  Table,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  BelongsToMany,
} from 'sequelize-typescript';
import { Assignment } from '../../assignment/model/assignment.model';
import { Employee } from '../../employee/model/employee.model';

@Table({ tableName: 'projects', timestamps: true, paranoid: true })
export class Project extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id?: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  deadline!: Date;

  @Column({
    type: DataType.ENUM('PENDING', 'IN_PROGRESS', 'COMPLETED'),
    allowNull: false,
  })
  status!: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';

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

  @DeletedAt
  @Column({
    field: 'deleted_at',
    type: DataType.DATE,
    allowNull: true,
  })
  deletedAt?: Date;

  @BelongsToMany(() => Employee, () => Assignment)
  employees!: Employee[];
}
