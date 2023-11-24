import { PrismaClient } from '@prisma/client';
import { UserRepository } from '../domain/user/userRepository';
import { User } from '../domain/user/user';
import { UUID } from 'crypto';

const prisma = new PrismaClient();

export const prismaUserRepository: UserRepository = {
  async create(user: User): Promise<User> {
    if (!user.name || !user.email) {
      throw new Error('Name and email are required');
    }
    const newUser = await prisma.user.create({ data: { ...user } });
    return { id: newUser.id as UUID, name: newUser.name, email: newUser.email };
  },
  async findById(id: string): Promise<User> {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    return { id: user.id as UUID, name: user.name, email: user.email };
  },
  async getAll(): Promise<User[]> {
    const users = await prisma.user.findMany();
    return users.map((user) => ({
      id: user.id as UUID,
      name: user.name,
      email: user.email,
    }));
  },
  async updateUser(id: string, user: User): Promise<User> {
    const updatedUser = await prisma.user.update({ where: { id }, data: user });
    return { id: updatedUser.id as UUID, name: updatedUser.name, email: updatedUser.email };
  },
  async deleteUser(id: string): Promise<void> {
    await prisma.user.delete({ where: { id } });
  },
};