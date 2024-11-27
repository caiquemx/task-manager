import { TaskDTO } from '../DTOs/TaskDTO';
import { create, findById, findMany } from '../repository/tasksRepository';
import { findUserByIdService } from './userService';

export const findManyTasksService = async () => {
  const result = await findMany();
  return result;
};

export const findTaskByIdService = async (id: number) => {
  const result = await findById(id);
  return result;
};

export const createTaskService = async (data: TaskDTO) => {
  const { userId } = data;
  const user = await findUserByIdService(userId);

  if (user?.id !== userId) {
    // throwing to catch at the middleware
    throw Error('Operation not allowed');
  }

  const result = await create(data);
  return result;
};
