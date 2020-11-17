import { Application } from 'egg';
// import md5 = require('md5');

// 用户表
export default (app: Application) => {
  const { STRING, INTEGER } = app.Sequelize;
  const User: any = app.model.define('zzc_user', {
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

  // 关联分类表
  User.associate = function() {
    User.hasMany(app.model.Mood, { foreignKey: 'user_id', as: 'mood' });
    User.hasMany(app.model.Article, { foreignKey: 'user_id', as: 'articles' });
    User.hasMany(app.model.Album, { foreignKey: 'user_id', as: 'albums' });
  };

  // User.sync().then(() => {
  //   // 插入一条默认数据
  //   User.findOne({ attributes: [ 'name' ], where: { name: 'admin' } }).then((data: any) => {
  //     if (!data) {
  //       User.create({
  //         name: 'admin',
  //         nickname: '椰子皮',
  //         password: md5('123456'),
  //         role: 'super',
  //         avatar: '/static/img/avatar_default.png',
  //         status: 1,
  //       });
  //     }
  //   });
  // });

  return User;
};
