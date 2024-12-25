import {
  Column,
  Model,
  PrimaryKey,
  Table,
  DataType,
  CreatedAt,
  UpdatedAt,
  IsEmail,
  DeletedAt,
  BelongsToMany,
} from 'sequelize-typescript';
import { Project } from '../../project/model/project.model';
import { Assignment } from '../../assignment/model/assignment.model';

@Table({ tableName: 'employees', timestamps: true, paranoid: true })
export class Employee extends Model {
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

  @IsEmail
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  role!: string;

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

  @BelongsToMany(() => Project, () => Assignment)
  projects!: Project[];
}
