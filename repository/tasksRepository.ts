import { TaskDTO } from '../DTOs/TaskDTO';
import Tasks from '../entities/TaskEntity';

export const findMany = async () => {
  const result = await Tasks.findMany();
  return result;
};

export const findById = async (id: number) => {
  const result = await Tasks.findUnique({ where: { id } });
  return result;
};

export const create = async (data: TaskDTO) => {
  const result = await Tasks.create({
    data: {
      ...data,
      done: data.done ?? false,
    },
  });
  return result;
};
