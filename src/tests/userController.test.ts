// UsuarioControlador.test.ts

import request from 'supertest';
import { getUserById } from '../domain/user/services/userService';
import { UserRepository } from '../domain/user/userRepository';
import { User } from '../domain/user/user';

const mockUserRepository: UserRepository = {
  async findById(id: string): Promise<User> {
    return { id, name: 'Test User' };
  },
  // TO DO other CRUD operations...
};

describe('getUser', () => {
  it('fetches a user by id', async () => {
    const user = await getUserById(mockUserRepository)(1);
    expect(user).toEqual({ id: 1, name: 'Test User' });
  });
  // TO DO write tests for other CRUD operations...
});
