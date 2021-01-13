import { Application } from 'egg';

// 栏目分类表
export default (app: Application) => {
  const { STRING, INTEGER, BOOLEAN, TEXT } = app.Sequelize;
  const Classification: any = app.model.define('zzc_classification', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    alias: STRING(30),
    url: STRING(30),
    status: INTEGER,
    type: STRING(20),
    column_id: INTEGER,
    new_window: {
      type: BOOLEAN,
      defaultValue: false,
    },
    sort: {
      type: INTEGER,
      defaultValue: 1,
    },
    can_delete: {
      type: BOOLEAN,
      defaultValue: false,
    },
    keywords: STRING(100),
    description: STRING(100),
    content: TEXT,
  },
  { initialAutoIncrement: '10000' },
  );

  // 关联栏目表
  Classification.associate = () => {
    Classification.belongsTo(app.model.Column, { foreignKey: 'column_id', as: 'columns' });
    Classification.hasMany(app.model.Article, { foreignKey: 'article_id', as: 'articles' });
  };

  // Classification.sync();

  return Classification;
};
