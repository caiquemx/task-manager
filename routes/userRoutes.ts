import express from 'express';
import {
  createUserController,
  findManyUserController,
  findUserByIdController,
} from '../controller/userController';

const router = express.Router();

router.get('/', findManyUserController);
router.get('/:id', findUserByIdController);
router.post('/', createUserController);

export default router;
