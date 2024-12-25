import { Sequelize } from 'sequelize-typescript';
import { Employee } from '../modules/employee/model/employee.model';
import { Project } from '../modules/project/model/project.model';
import { Assignment } from '../modules/assignment/model/assignment.model';
import dotenv from 'dotenv';

dotenv.config();

const dbPort = process.env.DB_PORT ? +process.env.DB_PORT : 5432;
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: dbPort,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  models: [Employee, Project, Assignment],
  logging: true,
});

export default sequelize;
