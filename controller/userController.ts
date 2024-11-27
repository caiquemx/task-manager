import {
  createUserService,
  findManyUsersService,
  findUserByIdService,
} from '../service/userService';
import { Request, Response } from 'express';

export const findManyUserController = async (req: Request, res: Response) => {
  try {
    const result = await findManyUsersService();
    res.status(200).json({ result });
  } catch (error) {
    // alterar para next(error) quando houver middleware
    console.log(error);
  }
};

export const findUserByIdController = async (req: Request, res: Response) => {
  try {
    // id virá do token no futuro
    // recebendo da requisição para teste de desenvolvimento
    const id = Number(req.params.id);
    const result = await findUserByIdService(id);
    res.status(200).json({ result });
  } catch (error) {
    //alterar para next(error) quando houver middleware
    console.log(error);
  }
};

export const createUserController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await createUserService(data);
    res.status(201).json({ result });
  } catch (error) {
    //alterar para next(error) quando houver middleware
    console.log(error);
  }
};
