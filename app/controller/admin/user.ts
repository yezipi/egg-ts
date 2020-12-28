import { Controller } from 'egg';

// 用户相关接口
export default class UserController extends Controller {

  public async index() {
    const { ctx } = this;
    const data = await ctx.service.user.index(ctx.query);
    ctx.success(data);
  }

  public async info() {
    const { ctx } = this;
    ctx.validate({ id: 'string' }, ctx.params);
    const data = await ctx.service.user.info(ctx.params);
    ctx.success(data);
  }

  public async update() {
    const { ctx } = this;
    ctx.validate({ id: 'string' }, ctx.params);
    ctx.body = await ctx.service.user.update(ctx.params, ctx.request.body);
  }

  public async create() {
    const { ctx } = this;
    const validParams = {
      name: {
        type: 'string',
        required: true,
      },
      nickname: {
        type: 'string',
        required: true,
      },
      password: {
        type: 'string',
        required: true,
      },
    };
    console.log(ctx.request.body);
    ctx.validate(validParams, ctx.request.body);
    ctx.body = await ctx.service.user.create(ctx.request.body);
  }

  public async destroy() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.destroy(ctx.query);
  }
}
