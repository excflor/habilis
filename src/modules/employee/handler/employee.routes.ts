import { Router } from 'express';
import { EmployeeHandler } from './employee.handler';

const router = Router();
const employeeHandler = new EmployeeHandler();

router.post('/employee', employeeHandler.create);

export default router;
