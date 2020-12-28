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
      const stringErr: any = err.toString();
      let errMsg = stringErr.indexOf('Table') > -1 ? '数据库出错！' : stringErr;
      if (typeof err === 'object') {
        errMsg = JSON.stringify(err);
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
