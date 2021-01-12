import { Service } from 'egg';
import md5 = require('md5');
import jwt = require('jsonwebtoken');

export default class User extends Service {

  /**
   * 用户列表
   * @param { String } params 参数
   * @param { String } params.name 用户名
   * @param { String } params.password 密码
   */
  public async index(params: any) {
    return await this.ctx.model.User.findAndCountAll(params);
  }

  /**
   * 用户登录
   * @param { String } params 参数
   * @param { String } params.name 用户名
   * @param { String } params.password 密码
   */
  public async login(params: object) {
    const { name, password }: any = params;
    const md5Pwd = md5(password);
    const { dataValues } = await this.ctx.model.User.findOne({
      where: { name, password: md5Pwd },
    });

    console.log(dataValues);

    const { status, role }: any = dataValues;

    if (status !== 1) {
      throw { msg: '账号已被禁用, 无法登录' };
    }

    // 要生成token的主题信息
    const userToken = { name, status, role };
    const secretOrPrivateKey = 'zzc';
    const token = jwt.sign(userToken, secretOrPrivateKey, {
      expiresIn: 60 * 60 * 24 * 30, // 1个月过期
    });

    delete dataValues.password;

    // 记录登录日志
    await this.ctx.model.Behaviorlog.create({
      user_id: dataValues.id,
      description: '登录操作',
    });

    return {
      token,
      user: dataValues,
    };
  }

  /**
   * 查询单个用户
   * @param { String } params 参数
   * @param { String } params.id 用户id
   */
  public async info(params: { id: string }) {
    return await this.ctx.model.User.findOne({ where: params });
  }

  /**
   * 更新单个用户
   * @param { Object } params 路由参数
   * @param { Object } params.id 用户id
   * @param { String } body 参数
   * @param { String } body.name 账号
   * @param { String } body.nickname 昵称
   * @param { String } body.password 密码
   * @param { Number } body.status 状态
   */
  public async update(params: any, body: any) {
    return await this.ctx.model.User.update(body, { where: params });
  }

  /**
   * 创建用户
   * @param { String } params 参数
   * @param { String } params.name 账号
   * @param { String } params.nickname 昵称
   * @param { String } params.password 密码
   * @param { Number } params.status 状态
   * @param { String } params.role 角色
   * @param { String } params.avatar 头像
   */
  public async create(params: any) {
    const isFindOne = await this.ctx.model.User.findOne({ where: { name: params.name } });
    if (isFindOne) {
      throw {
        msg: '已经存在哦',
      };
    }
    return await this.ctx.model.User.create(params);
  }

  /**
   * 删除单个用户
   * @param { String } params 参数
   * @param { String } params.id 用户id
   */
  public async destroy(params: { id: string }) {
    return await this.ctx.model.User.destroy({ where: { id: params.id } });
  }

}
