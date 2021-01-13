import { Controller } from 'egg';

// 用户相关接口
export default class UserController extends Controller {

  public async index() {
    const { ctx, service } = this;
    const data = await service.user.index(ctx.query);
    ctx.success(data);
  }

  public async info() {
    const { ctx, service } = this;
    ctx.validate({ id: 'string' }, ctx.params);
    const data = await service.user.info(ctx.params);
    ctx.success(data);
  }

  public async update() {
    const { ctx, service } = this;
    const requestParams = {
      ...ctx.params,
      ...ctx.request.body,
    };
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
    ctx.validate(validParams, requestParams);
    const data = await service.user.update(ctx.params, ctx.request.body);
    ctx.success(data);
  }

  public async create() {
    const { ctx, service } = this;
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
    ctx.validate(validParams, ctx.request.body);
    const data = await service.user.create(ctx.request.body);
    ctx.success(data);
  }

  public async destroy() {
    const { ctx, service } = this;
    ctx.validate({ id: 'string' }, ctx.params);
    const data = await service.user.destroy(ctx.params);
    ctx.success(data);
  }

  public async login() {
    const { ctx, service } = this;
    const { body } = ctx.request;
    const validParams = {
      name: {
        type: 'string',
        required: true,
      },
      password: {
        type: 'string',
        required: true,
      },
    };
    ctx.validate(validParams, body);
    const data = await service.user.login(body);
    ctx.success(data);
  }

}
