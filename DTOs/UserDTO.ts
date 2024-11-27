type Role = 'ADM' | 'USER';

export interface UserDTO {
  username: string;
  role?: Role;
}
