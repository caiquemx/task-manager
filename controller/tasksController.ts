import { Request, Response } from 'express';
import {
  createTaskService,
  findManyTasksService,
  findTaskByIdService,
} from '../service/tasksService';

export const findManyTasksController = async (req: Request, res: Response) => {
  try {
    const result = await findManyTasksService();
    res.status(200).json({ result });
  } catch (error) {
    // alterar para next(error) quando houver middleware
    console.log(error);
  }
};

export const findTaskByIdController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await findTaskByIdService(id);
    res.status(200).json({ result });
  } catch (error) {
    // alterar para next(error) quando houver middleware
    console.log(error);
  }
};

export const createTaskController = async (req: Request, res: Response) => {
  try {
    // em breve o id virá do token => const { id } = req.user;
    const result = await createTaskService(req.body);
    res.status(201).json({ result });
  } catch (error) {
    // alterar para next(error) quando houver middleware
    console.log(error);
  }
};
