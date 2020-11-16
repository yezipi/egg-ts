import { Service } from 'egg';
import md5 = require('md5');
import jwt = require('jsonwebtoken');

export default class User extends Service {

  /**
   * @name 用户列表
   * @param { String } params 参数
   * @param { String } params.name 用户名
   * @param { String } params.password 密码
   */
  public async index(params: any) {
    return await this.ctx.model.User.findAndCountAll(params);
  }

  /**
   * @name 用户登录
   * @param { String } params 参数
   * @param { String } params.name 用户名
   * @param { String } params.password 密码
   */
  public async login(params: object) {
    const { name, password }: any = params;
    const md5Pwd = md5(password);
    const data: any = await this.ctx.model.User.findOne({
      where: { name, password: md5Pwd },
    });

    const { status, role }: any = data;

    if (status !== 1) {
      throw { msg: '账号已被禁用, 无法登录' };
    }

    // 要生成token的主题信息
    const userToken = { name, status, role };
    const secretOrPrivateKey = 'zzc';
    const token = jwt.sign(userToken, secretOrPrivateKey, {
      expiresIn: 60 * 60 * 24 * 30, // 1个月过期
    });

    delete data.password;

    // 记录登录日志
    await this.ctx.model.Behaviorlog.create({
      user_id: data.id,
      description: '登录操作',
    });

    return {
      token,
      ...data,
    };
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
