import { Router } from 'express';
import { ProjectHandler } from './project.handler';

const router = Router();
const projectHandler = new ProjectHandler();

router.post('/projects', projectHandler.create);
router.get('/projects', projectHandler.findAll);
router.get('/projects/:id', projectHandler.findById);
router.put('/projects/:id', projectHandler.update);
router.delete('/projects/:id', projectHandler.delete);

export default router;
