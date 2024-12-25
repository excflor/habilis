import express from 'express';
import { AssignmentHandler } from './assignment.handler';

const router = express.Router();
const assignmentHandler = new AssignmentHandler();

router.post('/assignments', assignmentHandler.assignEmployeesToProject);
router.get('/projects/:id/employees', assignmentHandler.getEmployeesByProjectId);
router.get('/employees/:id/projects', assignmentHandler.getProjectsByEmployeeId);

export default router;
