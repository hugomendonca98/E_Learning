import { Router } from 'express';
import courseRouter from '../modules/courses/routes/courses.routes';
import sessionsRouter from '../modules/user/routes/sessions.routes';

import userRouter from '../modules/user/routes/user.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/session', sessionsRouter);
routes.use('/courses', courseRouter);

export default routes;
