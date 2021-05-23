import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import ensureAuthenticated from '../../user/middlewares/ensureAuthenticated';
import CreateCourseController from '../controllers/CourseController';

const courseRouter = Router();

const courseController = new CreateCourseController();

courseRouter.use(ensureAuthenticated);

courseRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required().min(2),
      image: Joi.string().required(),
    },
  }),
  courseController.create,
);

courseRouter.get('/', courseController.index);

courseRouter.put(
  '/:course_id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required().min(2),
      image: Joi.string().required().uri(),
    },
  }),
  courseController.update,
);

export default courseRouter;
