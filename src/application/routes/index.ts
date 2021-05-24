import { Router } from 'express';
import courseRouter from '../modules/courses/routes/courses.routes';
import lessonRouter from '../modules/lessons/routes/lesson.routes';
import sessionsRouter from '../modules/user/routes/sessions.routes';

import userRouter from '../modules/user/routes/user.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/session', sessionsRouter);
routes.use('/courses', courseRouter);
routes.use('/lesson', lessonRouter);

export default routes;
