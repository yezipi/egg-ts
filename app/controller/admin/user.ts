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
    ctx.body = await ctx.service.user.info();
  }

  public async update() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.update();
  }

  public async create() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.create();
  }

  public async destroy() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.destroy();
  }
}
