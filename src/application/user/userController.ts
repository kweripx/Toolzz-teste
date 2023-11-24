import express from 'express';
import { prismaUserRepository } from '../../infrastructure/prismaUserRepository';
import { createUser, update, getAll, getUserById, deleteUser } from '../../domain/user/services/userService';
const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const user = await prismaUserRepository.findById(req.params.id);
    return res.json(user);
  } catch (err: any) {
    return res.status(404).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const allUsers = await getAll(prismaUserRepository)();
  res.json(allUsers);
});

router.post('/create', async (req, res) => {
 const create = await createUser(prismaUserRepository)(req.body);
 return res.status(200).json({ message: 'User created successfully', user: create });
});

router.put('/:id', async (req, res) => {
  const updateUser = await update(prismaUserRepository)(req.params.id, req.body);
  return res.status(200).json({ message: 'User updated successfully', user: updateUser });
});

router.delete('/:id', async (req, res) => {
  await prismaUserRepository.deleteUser(req.params.id);
  return res.status(204).send();
 });

export default router;