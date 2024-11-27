import { UserDTO } from '../DTOs/UserDTO';
import { findById, findMany, create } from '../repository/userRepository';

export const findManyUsersService = async () => {
  const result = await findMany();
  return result;
};

export const findUserByIdService = async (id: number) => {
  const result = await findById(id);
  return result;
};

export const createUserService = async (data: UserDTO) => {
  if (data.role && data.role !== 'ADM' && data.role !== 'USER') {
    throw new Error('Role invalid value');
  }
  const result = await create(data);
  return result;
};
