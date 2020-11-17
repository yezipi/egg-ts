import { Application } from 'egg';

// 评论表
export default (app: Application) => {
  const { STRING, INTEGER, DATE, TEXT, BOOLEAN } = app.Sequelize;
  const Comment: any = app.model.define('zzc_comment', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    article_id: INTEGER,
    nickname: STRING(10),
    avatar: STRING(100),
    address: STRING(50),
    ua: STRING(10),
    site: STRING(30),
    ip: STRING(30),
    email: STRING(30),
    content: TEXT,
    reply_time: DATE,
    reply_content: TEXT,
    status: INTEGER,
    type: {
      type: STRING(30),
      defaultValue: 'article',
    },
    lat: STRING(20),
    lng: STRING(20),
    province: STRING(20),
    city: STRING(20),
    district: STRING(20),
    nofollow: {
      type: BOOLEAN,
      defaultValue: false,
    },
  },
  { initialAutoIncrement: '10000' },
  );

  // 关联文章表
  Comment.associate = () => {
    Comment.belongsTo(app.model.Article, { foreignKey: 'article_id', as: 'articles' });
    Comment.belongsTo(app.model.Mood, { foreignKey: 'article_id', as: 'moods' });
    Comment.belongsTo(app.model.Album, { foreignKey: 'article_id', as: 'albums' });
  };

  // Comment.sync();

  return Comment;
};
