import express from 'express';
import { prismaUserRepository } from '../../infrastructure/prismaUserRepository';
import { createUser, update, getAll, getUserById, deleteUser } from '../../domain/user/services/userService';
const router = express.Router();

router.get('/:id', async (req, res) => {
  const user = await getUserById(prismaUserRepository)(req.params.id);
  res.json(user);
});

router.get('/', async (req, res) => {
  const allUsers = await getAll(prismaUserRepository)();
  res.json(allUsers);
});

router.post('/', async (req, res) => {
 const create = await createUser(prismaUserRepository)(req.body);
 return res.json(create);
});

router.put('/:id', async (req, res) => {
  const updateUser = await update(prismaUserRepository)(req.params.id, req.body);
  return res.json(updateUser);
});

router.delete('/:id', async (req, res) => {
  const deleteUserById = await deleteUser(prismaUserRepository)(req.params.id);
  return res.json(deleteUserById);
 });

export default router;