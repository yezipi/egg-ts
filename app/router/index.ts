import { Application } from 'egg';

import UserRouter from './user';

export default (app: Application) => {
  UserRouter.use(app);
};
