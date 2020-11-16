import { Application } from 'egg';

// 用户行为日志表
export default (app: Application) => {
  const { STRING, INTEGER } = app.Sequelize;
  const Behaviorlog: any = app.model.define('zzc_behaviorlog', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id: INTEGER,
    ip: STRING,
    description: STRING,
    address: STRING,
    lat: INTEGER,
    lng: INTEGER,
    ua: INTEGER,
    path: STRING,
  },
  { initialAutoIncrement: '10000' },
  );

  // 表关联
  Behaviorlog.associate = () => {
    Behaviorlog.belongsTo(app.model.User, { foreignKey: 'user_id', as: 'users' });
  };

  Behaviorlog.sync();

  return Behaviorlog;
};
