import { User } from './user';

export type UserRepository = {
  create(user: User): Promise<User>;
  getAll(): Promise<User[]>;
  findById(id: number): Promise<User>;
  updateUser(id: number, user: User): Promise<User>;
  deleteUser(id: number): Promise<void>;
};