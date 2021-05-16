import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import CreateCourseController from '../controllers/CreateCourseController';

const courseRouter = Router();

const createCourseController = new CreateCourseController();

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

courseRouter.put('/:course_id/update' /* Controller UpdateCourse */);

export default courseRouter;
