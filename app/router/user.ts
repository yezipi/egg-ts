import { Application } from 'egg';

const UserRouter = class {
  use(app: Application) {
    const { controller, router } = app;
    const { admin } = controller;
    router.get('/v1/admin/user', admin.user.index);
    router.get('/v1/admin/user/:id', admin.user.info);
    router.put('/v1/admin/user/:id', admin.user.update);
    router.post('/v1/admin/user', admin.user.create);
    router.post('/v1/admin/user/login', admin.user.login);
    router.delete('/v1/admin/user/:id', admin.user.destroy);
  }
};

export default new UserRouter();
