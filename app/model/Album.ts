import { Application } from 'egg';

// 微语表
export default (app: Application) => {
  const { STRING, INTEGER, TEXT, BOOLEAN } = app.Sequelize;
  const Album: any = app.model.define('zzc_album', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    column_id: INTEGER,
    content: TEXT,
    user_id: INTEGER,
    author_name: STRING(10),
    path: STRING(100),
    hit: {
      type: INTEGER,
      defaultValue: 0,
    },
    status: {
      type: INTEGER,
      defaultValue: 0,
    },
    description: STRING(200),
    ua: STRING(10),
    is_recommend: {
      type: BOOLEAN,
      defaultValue: false,
    },
    comment_open: {
      type: BOOLEAN,
      defaultValue: false,
    },
  },
  { initialAutoIncrement: '10000' },
  );

  // 表关联
  Album.associate = () => {
    Album.belongsTo(app.model.Column, { foreignKey: 'column_id', as: 'columns' });
    Album.belongsTo(app.model.User, { foreignKey: 'user_id', as: 'users' });
  };

  Album.sync();

  return Album;
};
