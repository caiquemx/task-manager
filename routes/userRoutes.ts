import express from 'express';
import {
  findManyUserController,
  findUserByIdController,
} from '../controller/userController';

const router = express.Router();

router.get('/', findManyUserController);
router.get('/:id', findUserByIdController);

export default router;
