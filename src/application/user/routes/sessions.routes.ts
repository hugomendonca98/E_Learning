import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import AuthenticateUserController from '../controllers/AuthenticateUserController';

const sessionsRouter = Router();

const sessionsController = new AuthenticateUserController();

sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    },
  }),

  sessionsController.authentication,
);

export default sessionsRouter;
