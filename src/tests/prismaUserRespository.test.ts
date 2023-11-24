import { prismaUserRepository } from '../infrastructure/prismaUserRepository';
import { User } from '../domain/user/user';
import { v4 as uuidv4 } from 'uuid';

describe('prismaUserRepository', () => {
  let user: User;

  beforeEach(async () => {
    user = await prismaUserRepository.create({
      id: uuidv4(),
      name: 'Theo',
      email: 'theo.mail@gmail.com',
    });
  });

  it('should create a user', async () => {
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name', 'Theo');
    expect(user).toHaveProperty('email', 'theo.mail@gmail.com');
  });

  it('should get a user by id', async () => {
    const fetchedUser = await prismaUserRepository.findById(user.id);
    expect(fetchedUser).toEqual(user);
  });

  it('should update a user', async () => {
    const updatedUser = await prismaUserRepository.updateUser(user.id, {
      id: user.id,
      name: 'Theo',
      email: 'theo.benitez@gmail.com',
    });
    expect(updatedUser).toHaveProperty('name', 'Theo');
    expect(updatedUser).toHaveProperty('email', 'theo.benitez@gmail.com');
  });

  afterEach(async () => {
    await prismaUserRepository.deleteUser(user.id);
  });
});