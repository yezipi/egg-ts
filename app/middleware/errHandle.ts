import { Context } from 'egg';

export default () => {
  return async (ctx: Context, next: () => Promise<any>) => {
    try {
      const statusMsg = {
        404: '404 Not Found',
        403: '403',
        500: '500',
      };
      await next();
      if (ctx.status !== 200) {
        ctx.body = {
          code: -1,
          status: ctx.status,
          msg: statusMsg[ctx.status],
        };
      }
    } catch (err) {
      console.log(err);

      const isObject = typeof err === 'object';

      const stringErr: any = isObject ? err : err.toString();

      const errMsg = !isObject && stringErr.indexOf('Table') > -1 ? '数据库出错！' : stringErr;

      if (Array.isArray(err.errors)) {
        err.msg = err.errors.map((e: any) => {
          return e.field + '：' + e.message;
        }).join();
      }

      ctx.body = {
        code: -1,
        status: 500,
        msg: err.msg || '服务器内部错误',
        content: err.errors ? JSON.stringify(err.errors) : errMsg,
      };

    }
  };
};
