import { findById, findMany } from '../repository/tasksRepository';

export const findManyTasksService = async () => {
  const result = await findMany();
  return result;
};

export const findTaskByIdService = async (id: number) => {
  const result = await findById(id);
  return result;
};
