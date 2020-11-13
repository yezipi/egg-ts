import { Context } from 'egg';
import jwt = require('jsonwebtoken');

export default () => {
  return async (ctx: Context, next: () => Promise<any>) => {
    const { request }: any = ctx;
    const { header, url }: any = request;
    if (url === '/v1/admin/login' || url.indexOf('client') > -1) {
      await next();
      return;
    }
    jwt.verify(header.Authorization, 'yezipi', async (err: any) => {
      if (err) {
        ctx.body = {
          code: 401,
          msg: 'token不存在或已失效',
        };
        return;
      }
      await next();
    });
  };
};
