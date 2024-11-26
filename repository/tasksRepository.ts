import Tasks from '../entities/TaskEntity';

export const findMany = async () => {
  const result = await Tasks.findMany();
  return result;
};

export const findById = async (id: number) => {
  const result = await Tasks.findUnique({ where: { id } });
  return result;
};
