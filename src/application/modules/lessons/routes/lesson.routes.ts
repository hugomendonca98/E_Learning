import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import ensureAuthenticated from '../../user/middlewares/ensureAuthenticated';
import LessonController from '../controllers/LessonController';
import LessonsController from '../controllers/LessonsController';

const lessonRouter = Router();

lessonRouter.use(ensureAuthenticated);

const lessonController = new LessonController();
const lessonsController = new LessonsController();

lessonRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required().min(2),
      duration: Joi.number().required(),
      description: Joi.string().required().min(2),
      course_id: Joi.string().uuid().required(),
      video_id: Joi.string().required(),
    },
  }),
  lessonController.create,
);

lessonRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  lessonController.index,
);

lessonRouter.get(
  '/:course_id/lessons',
  celebrate({
    [Segments.PARAMS]: {
      course_id: Joi.string().uuid().required(),
    },
  }),
  lessonsController.index,
);

lessonRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required().min(2),
      duration: Joi.number().required(),
      description: Joi.string().required().min(2),
      video_id: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
);

export default lessonRouter;
