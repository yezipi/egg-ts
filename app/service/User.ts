import { Service } from 'egg';

export default class User extends Service {

  public async index(type: any) {
    console.log(type);
    return await this.ctx.model.User.findAndCountAll();
  }

  public async info() {
    return { a: 11, b: 22 };
  }

  public async update() {
    return { a: 11, b: 22 };
  }

  public async create() {
    const params = {
      name: 'test2',
      role: 'test',
      password: '123456',
    };
    const isFindOne = await this.ctx.model.User.findOne({ where: { name: params.name } });
    if (isFindOne) {
      return {
        msg: '已经存在哦',
      };
    }
    return await this.ctx.model.User.create(params);
  }

  public async destroy() {
    return { a: 11, b: 22 };
  }

}
