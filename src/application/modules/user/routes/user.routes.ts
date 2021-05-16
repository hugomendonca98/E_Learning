import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import UserController from '../controllers/UserController';

const userRouter = Router();

const userController = new UserController();

userRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required().min(2),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    },
  }),

  userController.create,
);

export default userRouter;
