import { Application } from 'egg';

const ArticleRouter = class {
  use(app: Application) {
    const { controller, router } = app;
    const { admin } = controller;
    router.get('/v1/admin/article', admin.article.index);
  }
};

export default new ArticleRouter();
