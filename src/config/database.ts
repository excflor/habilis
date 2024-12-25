import { Sequelize } from 'sequelize-typescript';
import { Employee } from '../modules/employee/model/employee.model';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  models: [Employee],
});

export default sequelize;