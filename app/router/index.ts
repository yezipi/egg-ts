import { Application } from 'egg';

import UserRouter from './user';
import ArticleRouter from './article';

export default (app: Application) => {
  UserRouter.use(app);
  ArticleRouter.use(app);
};
