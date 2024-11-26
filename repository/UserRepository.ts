import User from '../entities/UserEntity';

export const findMany = async () => {
  const result = await User.findMany({ include: { tasks: true } });
  return result;
};

export const findById = async (id: number) => {
  const result = await User.findUnique({ where: { id } });
  return result;
};
