import { Application } from 'egg';

// 微语表
export default (app: Application) => {
  const { STRING, INTEGER, TEXT, BOOLEAN } = app.Sequelize;
  const Mood: any = app.model.define('zzc_mood', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    column_id: INTEGER,
    content: TEXT,
    user_id: INTEGER,
    author_name: STRING(10),
    hit: {
      type: INTEGER,
      defaultValue: 0,
    },
    status: {
      type: INTEGER,
      defaultValue: 0,
    },
    address: STRING,
    ua: STRING(10),
    comment_open: {
      type: BOOLEAN,
      defaultValue: false,
    },
  },
  { initialAutoIncrement: '10000' },
  );

  // 表关联
  Mood.associate = () => {
    Mood.belongsTo(app.model.Column, { foreignKey: 'column_id', as: 'columns' });
    Mood.belongsTo(app.model.User, { foreignKey: 'user_id', as: 'users' });
  };

  // Mood.sync();

  return Mood;
};
