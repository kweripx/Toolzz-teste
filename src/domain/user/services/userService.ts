import { User } from "../user";
import { UserRepository } from '../userRepository';


export const createUser = (userRepository: UserRepository) => (user: User): Promise<User> => {
  return userRepository.create(user);
}

export const getUserById = (userRepository: UserRepository) => (id: string): Promise<User> => {
  return userRepository.findById(id);
};

export const getAll = (userRepository: UserRepository) => (): Promise<User[]> => { 
  return userRepository.getAll();
};

export const update = (userRepository: UserRepository) => (id: string, user: User): Promise<User> => {
  return userRepository.updateUser(id, user);
};

export const deleteUser = (userRepository: UserRepository) => (id: string): Promise<void> => {
  return userRepository.deleteUser(id);
};
