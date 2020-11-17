import { Application } from 'egg';

// 微语表
export default (app: Application) => {
  const { STRING, INTEGER, TEXT, BOOLEAN } = app.Sequelize;
  const Blogroll: any = app.model.define('zzc_blogroll', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    column_id: INTEGER,
    nickname: STRING(10),
    avatar: STRING(100),
    address: STRING(50),
    ua: STRING(10),
    site: STRING(30),
    ip: STRING(30),
    email: STRING(30),
    content: TEXT,
    status: INTEGER,
    type: {
      type: STRING(30),
      defaultValue: 'article',
    },
    nofollow: {
      type: BOOLEAN,
      defaultValue: false,
    },
  },
  { initialAutoIncrement: '10000' },
  );

  // 表关联
  Blogroll.associate = () => {
    Blogroll.belongsTo(app.model.Column, { foreignKey: 'column_id', as: 'columns' });
  };

  // Blogroll.sync();

  return Blogroll;
};
