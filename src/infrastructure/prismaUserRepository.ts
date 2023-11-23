import { PrismaClient } from '@prisma/client';
import { UserRepository } from '../domain/user/userRepository';
import { User } from '../domain/user/user';

export const prismaUserRepository: UserRepository = {
  async create(user: User): Promise<User> {
    const newUser = await new PrismaClient().user.create({ data: user });
    return { id: newUser.id, name: newUser.name, email: newUser.email };
  },
  async findById(id: number): Promise<User> {
    const user = await new PrismaClient().user.findUnique({ where: { id } });
    return { id: user.id, name: user.name, email: user.email };
  },
  async getAll(): Promise<User[]> {
    const users = await new PrismaClient().user.findMany();
    return users.map((user: User) => ({ id: user.id, name: user.name, email: user.email }));
  },
  async updateUser(id: number, user: User): Promise<User> {
    const updatedUser = await new PrismaClient().user.update({ where: { id }, data: user });
    return { id: updatedUser.id, name: updatedUser.name, email: updatedUser.email };
  },
  async deleteUser(id: number): Promise<void> {
    await new PrismaClient().user.delete({ where: { id } });
  },
};