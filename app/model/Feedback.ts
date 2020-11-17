import { Application } from 'egg';

// 留言表
export default (app: Application) => {
  const { STRING, INTEGER, DATE, TEXT, BOOLEAN } = app.Sequelize;
  const Feedback = app.model.define('zzc_feedback', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
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

  // Feedback.sync();

  return Feedback;
};
