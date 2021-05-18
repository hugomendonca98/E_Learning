import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import ensureAuthenticated from '../../user/middlewares/ensureAuthenticated';
import CreateCourseController from '../controllers/CreateCourseController';
import UpdateCourseController from '../controllers/UpdateCourseController';

const courseRouter = Router();

const createCourseController = new CreateCourseController();
const updateCourseController = new UpdateCourseController();

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

courseRouter.get('/' /* Controller ListCourses */);

courseRouter.put(
  '/:course_id/update',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required().min(2),
      image: Joi.string().required().uri(),
    },
  }),
  updateCourseController.Update,
);

export default courseRouter;
