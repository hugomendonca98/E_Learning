import { Router } from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import sessionsRouter from './sessions.routes';

import userRouter from './user.routes';

const routes = Router();

routes.use('/user', userRouter);
routes.use('/session', sessionsRouter);

routes.get('/test', ensureAuthenticated, (req, res) => {
  res.json({ message: 'foi' });
});

export default routes;
