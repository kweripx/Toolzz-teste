import { Route, Tags, Post, Body, Get, Path, Put, Delete, SuccessResponse } from 'tsoa';
import { prismaUserRepository } from '../../infrastructure/prismaUserRepository';
import { createUser, update, getAll, getUserById, deleteUser } from '../../domain/user/services/userService';
import { User } from '../../domain/user/user';
@Route('users')
@Tags('User')
export class UserController {
  @Get('{userId}')
  public async getUser(@Path() userId: string): Promise<User | null> {
    return await prismaUserRepository.findById(userId);
  }

  @Get('/')
  public async getUsers(): Promise<User[]> {
    return await getAll(prismaUserRepository)();
  }

  @SuccessResponse("201", "Created")
  @Post('/create')
  public async createUser(@Body() requestBody: User): Promise<User> {
    return await createUser(prismaUserRepository)(requestBody);
  }

  @Put('{userId}')
  public async updateUser(@Path() userId: string, @Body() requestBody: User): Promise<User> {
    return await update(prismaUserRepository)(userId, requestBody);
  }

  @Delete('{userId}')
  public async deleteUser(@Path() userId: string): Promise<void> {
    await prismaUserRepository.deleteUser(userId);
  }
}