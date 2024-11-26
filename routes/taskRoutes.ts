import express from 'express';
import {
  findManyTasksController,
  findTaskByIdController,
} from '../controller/tasksController';

const router = express.Router();

router.get('/', findManyTasksController);

router.get('/:id', findTaskByIdController);

export default router;
