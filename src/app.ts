import express from 'express';
import employeeRoutes from './modules/employee/handler/employee.routes';
import sequelize from './config/database';

const app = express();

app.use(express.json());
app.use('/api/v1', employeeRoutes);

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Database connected successfully');
//   })
//   .catch((error) => {
//     console.error('Unable to connect to the database:', error);
//   });

export default app;
