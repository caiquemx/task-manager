import express from 'express';

import userRoutes from './userRoutes';
import taskRoutes from './taskRoutes';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/tasks', taskRoutes);

export default router;
