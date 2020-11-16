import { Application } from 'egg';

// 文章表
export default (app: Application) => {
  const { STRING, INTEGER, TEXT, BOOLEAN } = app.Sequelize;
  const Article: any = app.model.define('zzc_article', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(50),
    type: {
      type: STRING(30),
      defaultValue: 'article',
    },
    column_id: INTEGER,
    class_id: INTEGER,
    cover_origin: STRING(50),
    cover_thumb: STRING(50),
    keywords: STRING(100),
    description: STRING(200),
    content: TEXT,
    user_id: INTEGER,
    author_name: STRING(10),
    hit: {
      type: INTEGER,
      defaultValue: 0,
    },
    zan: {
      type: INTEGER,
      defaultValue: 0,
    },
    status: {
      type: INTEGER,
      defaultValue: 0,
    },
    is_top: {
      type: BOOLEAN,
      defaultValue: false,
    },
    is_runcode: {
      type: BOOLEAN,
      defaultValue: false,
    },
    is_recommend: {
      type: BOOLEAN,
      defaultValue: false,
    },
    download_link: STRING(50),
    code_content: TEXT,
    comment_open: {
      type: BOOLEAN,
      defaultValue: false,
    },
    tags: STRING(100),
    sort: {
      type: INTEGER,
      defaultValue: 1,
    },
  },
  { initialAutoIncrement: '10000' },
  );

  // 表关联
  Article.associate = () => {
    Article.hasMany(app.model.Comment, { foreignKey: 'article_id', as: 'comments' });
    Article.belongsTo(app.model.Classification, { foreignKey: 'class_id', as: 'classifications' });
    Article.belongsTo(app.model.Column, { foreignKey: 'column_id', as: 'columns' });
    Article.belongsTo(app.model.User, { foreignKey: 'user_id', as: 'users' });
  };

  Article.sync();

  return Article;
};
