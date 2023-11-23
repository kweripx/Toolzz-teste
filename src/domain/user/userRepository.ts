import { User } from './user';

export type UserRepository = {
  create(user: User): Promise<User>;
  getAll(): Promise<User[]>;
  findById(id: string): Promise<User>;
  updateUser(id: string, user: User): Promise<User>;
  deleteUser(id: string): Promise<void>;
};