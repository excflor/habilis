import express from 'express';
import employeeRoutes from './modules/employee/handler/employee.routes';
import projectRoutes from './modules/project/handler/project.routes';
import sequelize from './config/database';

const app = express();

app.use(express.json());
app.use('/api/v1', employeeRoutes);
app.use('/api/v1', projectRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
sequelize.sync();

export default app;
