import { findById, findMany } from '../repository/UserRepository';

export const findManyUsersService = async () => {
  const result = await findMany();
  return result;
};

export const findUserByIdService = async (id: number) => {
  const result = await findById(id);
  return result;
};
