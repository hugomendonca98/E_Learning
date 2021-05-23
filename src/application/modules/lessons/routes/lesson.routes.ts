import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import ensureAuthenticated from '../../user/middlewares/ensureAuthenticated';
import LessonController from '../controllers/LessonController';

const lessonRouter = Router();

lessonRouter.use(ensureAuthenticated);

const lessonController = new LessonController();

lessonRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required().min(2),
      duration: Joi.number().required(),
      description: Joi.string().required().min(2),
      course_id: Joi.string().required(),
      video_id: Joi.string().required(),
    },
  }),
  lessonController.create,
);

export default lessonRouter;
