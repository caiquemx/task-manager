import { Request, Response } from 'express';
import { findManyTasksService, findTaskByIdService } from '../service/tasksService';

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
