import { Application } from 'egg';
import md5 = require('md5');

export default (app: Application) => {
  const { STRING, INTEGER } = app.Sequelize;
  const User = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    nickname: STRING(30),
    role: STRING(10),
    avatar: STRING(50),
    status: INTEGER,
    password: STRING(100),
  },
  { initialAutoIncrement: '10000' },
  );

  User.sync().then(() => {
    // 插入一条默认数据
    User.findOne({ attributes: [ 'name' ], where: { name: 'admin' } }).catch(() => {
      User.create({
        name: 'admin',
        nickname: '椰子皮',
        password: md5('123456'),
        role: 'super',
        avatar: '/static/img/avatar_default.png',
        status: 1,
      });
    });
  });

  return User;
};
