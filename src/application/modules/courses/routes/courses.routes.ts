import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import ensureAuthenticated from '../../user/middlewares/ensureAuthenticated';
import CreateCourseController from '../controllers/CreateCourseController';
import ListCoursesController from '../controllers/ListCourseController';
import UpdateCourseController from '../controllers/UpdateCourseController';

const courseRouter = Router();

const createCourseController = new CreateCourseController();
const updateCourseController = new UpdateCourseController();
const listCoursesController = new ListCoursesController();

courseRouter.use(ensureAuthenticated);

courseRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required().min(2),
      image: Joi.string().required(),
    },
  }),
  createCourseController.create,
);

courseRouter.get('/', listCoursesController.index);

courseRouter.put(
  '/:course_id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required().min(2),
      image: Joi.string().required().uri(),
    },
  }),
  updateCourseController.Update,
);

export default courseRouter;
