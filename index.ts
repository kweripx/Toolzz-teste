import express from 'express';
import userController from './src/presentation/userController';

const app = express();
app.use('/users', userController);
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});