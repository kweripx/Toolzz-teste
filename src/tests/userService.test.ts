import { createUser, getUserById, getAll, update, deleteUser } from '../domain/user/services/userService';
import { UserRepository } from '../domain/user/userRepository';
import { User } from '../domain/user/user';
import { v4 as uuidv4 } from 'uuid';

describe('userService', () => {
  let userRepository: UserRepository;
  let user: User;

  beforeEach(() => {
    userRepository = {
      create: jest.fn(),
      findById: jest.fn(),
      getAll: jest.fn(),
      updateUser: jest.fn(),
      deleteUser: jest.fn(),
    };
    user = { id: uuidv4(), name: 'Test User', email: 'test@example.com' };
  });

  it('should create a user', async () => {
    (userRepository.create as jest.Mock).mockResolvedValue(user);
    const result = await createUser(userRepository)(user);
    expect(result).toEqual(user);
    expect(userRepository.create).toHaveBeenCalledWith(user);
  });

  it('should get a user by id', async () => {
    (userRepository.findById as jest.Mock).mockResolvedValue(user);
    const result = await getUserById(userRepository)(user.id);
    expect(result).toEqual(user);
    expect(userRepository.findById).toHaveBeenCalledWith(user.id);
  });

  it('should get all users', async () => {
    const users: User[] = [user];
    (userRepository.getAll as jest.Mock).mockResolvedValue(users);
    const result = await getAll(userRepository)();
    expect(result).toEqual(users);
    expect(userRepository.getAll).toHaveBeenCalled();
  });

  it('should update a user', async () => {
    const updatedUser: User = { ...user, name: 'Updated User' };
    (userRepository.updateUser as jest.Mock).mockResolvedValue(updatedUser);
    const result = await update(userRepository)(user.id, updatedUser);
    expect(result).toEqual(updatedUser);
    expect(userRepository.updateUser).toHaveBeenCalledWith(user.id, updatedUser);
  });

  it('should delete a user', async () => {
    (userRepository.deleteUser as jest.Mock).mockResolvedValue(undefined);
    await deleteUser(userRepository)(user.id);
    expect(userRepository.deleteUser).toHaveBeenCalledWith(user.id);
  });
});