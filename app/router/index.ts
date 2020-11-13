import { Application } from 'egg';

import userRouter from './user';

export default (app: Application) => {
  userRouter.use(app);
};
