import { Column, Model, PrimaryKey, Table, DataType, CreatedAt, UpdatedAt, IsEmail, DeletedAt } from 'sequelize-typescript';

@Table({ tableName: 'employees', timestamps: true })
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
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: true,
  })
  createdAt?: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  updatedAt?: Date;

  @DeletedAt
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  deletedAt?: Date;
}
