import { Application } from 'egg';

export default (app: Application) => {
  const { STRING, INTEGER, TEXT, BOOLEAN } = app.Sequelize;
  const Article = app.model.define('articles', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(50),
    type: {
      type: STRING(30),
      defaultValue: 'article',
    },
    sub_column_id: INTEGER,
    cover_big: STRING(50),
    cover_small: STRING(50),
    keywords: STRING(100),
    description: STRING(200),
    content: TEXT,
    author_id: STRING(32),
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
    is_run_code: {
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

  return Article;
};
