import { Router } from 'express';
import sessionsRouter from './sessions.routes';

import userRouter from './user.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/session', sessionsRouter);

export default routes;
