import { UserRepository } from '../domain/user/userRepository';
import { User } from '../domain/user/user';
import { v4 as uuid } from 'uuid';

const mockUserRepository: UserRepository = {
  findById: jest.fn(),
  create: jest.fn(),
  getAll: jest.fn(),
  updateUser: jest.fn(),
  deleteUser: jest.fn(),
};

describe('User Repository', () => {
  let userRepository: UserRepository;

  beforeEach(() => {
    userRepository = mockUserRepository;
    jest.clearAllMocks();
  });

  it('Should create a user', async () => {
    const user: User = { id: uuid(), name: 'Test User', email: 'test@example.com' };
    (userRepository.create as jest.Mock).mockResolvedValue(user);
    const createdUser = await userRepository.create(user);
    expect(createdUser).toEqual(user);
    expect(userRepository.create).toHaveBeenCalledWith(user);
  });

  it('Should get all users', async () => {
    const users: User[] = [
      { id: uuid(), name: 'User 1', email: 'test@example.com' },
      { id: uuid(), name: 'User 2', email: 'test@example.com' },
      { id: uuid(), name: 'User 3', email: 'test@example.com' },
    ];
    (userRepository.getAll as jest.Mock).mockResolvedValue(users);
    const allUsers = await userRepository.getAll();
    expect(allUsers).toEqual(users);
    expect(userRepository.getAll).toHaveBeenCalled();
  });

  it('Should update a user', async () => {
    const user: User = { id: uuid(), name: 'Test User', email: 'test@example.com' };
    (userRepository.updateUser as jest.Mock).mockResolvedValue(user);
    const updatedUser = await userRepository.updateUser(user.id, user);
    expect(updatedUser).toEqual(user);
    expect(userRepository.updateUser).toHaveBeenCalledWith(user.id, user);
  });

  it('Should delete a user', async () => {
    const userId: string = uuid();
    (userRepository.deleteUser as jest.Mock).mockResolvedValue(null);
    await userRepository.deleteUser(userId);
    expect(userRepository.deleteUser).toHaveBeenCalledWith(userId);
  });

  it('Should delete multiple users', async () => {
    const userIds: string[] = [uuid(), uuid(), uuid()];
    (userRepository.deleteUser as jest.Mock).mockResolvedValue(null);

    for (const id of userIds) {
      await userRepository.deleteUser(id);
    }

    userIds.forEach(id => {
      expect(userRepository.deleteUser).toHaveBeenCalledWith(id);
    });
  });

  it('Should fail to create a user', async () => {
    (userRepository.create as jest.Mock).mockRejectedValue(new Error('Failed to create user'));
    await expect(userRepository.create({} as User)).rejects.toThrow('Failed to create user');
    expect(userRepository.create).toHaveBeenCalledWith({} as User);
  });

  it('Should fail to get all users', async () => {
    (userRepository.getAll as jest.Mock).mockRejectedValue(new Error('Failed to get users'));
    await expect(userRepository.getAll()).rejects.toThrow('Failed to get users');
    expect(userRepository.getAll).toHaveBeenCalled();
  });

  it('Should fail to update a user', async () => {
    const user: User = { id: uuid(), name: 'Test User', email: 'test@example.com' };
    (userRepository.updateUser as jest.Mock).mockRejectedValue(new Error('Failed to update user'));
    await expect(userRepository.updateUser(user.id, user)).rejects.toThrow('Failed to update user');
    expect(userRepository.updateUser).toHaveBeenCalledWith(user.id, user);
  });

  it('Should fail to delete a user', async () => {
    const userId: string = uuid();
    (userRepository.deleteUser as jest.Mock).mockRejectedValue(new Error('Failed to delete user'));
    await expect(userRepository.deleteUser(userId)).rejects.toThrow('Failed to delete user');
    expect(userRepository.deleteUser).toHaveBeenCalledWith(userId);
  });
});