import { Router } from 'express';
import { EmployeeHandler } from './employee.handler';

const router = Router();
const employeeHandler = new EmployeeHandler();

router.post('/employees', employeeHandler.create);
router.get('/employees', employeeHandler.findAll);
router.get('/employees/:id', employeeHandler.findById);
router.put('/employees/:id', employeeHandler.update);
router.delete('/employees/:id', employeeHandler.delete);

export default router;
