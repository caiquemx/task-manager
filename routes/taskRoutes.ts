import express from 'express';
import {
  createTaskController,
  findManyTasksController,
  findTaskByIdController,
} from '../controller/tasksController';

const router = express.Router();

router.get('/', findManyTasksController);

router.get('/:id', findTaskByIdController);

router.post('/', createTaskController);

export default router;
