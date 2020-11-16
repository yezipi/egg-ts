import { Context } from 'egg';

// 请求参数拦截
export default () => {
  return async (ctx: Context, next: () => Promise<any>) => {
    const { page, page_size } = ctx.query;
    if (page && page_size) {
      const offset = (Number(page) - 1) * Number(page_size);
      delete ctx.query.page;
      delete ctx.query.page_size;
      ctx.query.limit = Number(page_size);
      ctx.query.offset = Number(offset);
    }
    await next();
  };
};
