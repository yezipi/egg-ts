import { Application } from 'egg';

// 基础设置
export default (app: Application) => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;
  const Basesetting: any = app.model.define('zzc_basesetting', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    web_name: {
      type: STRING(15),
      defaultValue: '',
    },
    web_sign: {
      type: STRING(100),
    },
    web_slogan: {
      type: TEXT,
      defaultValue: '[]',
    },
    web_title: {
      type: STRING(30),
      defaultValue: '',
    },
    web_url: {
      type: STRING(50),
    },
    web_beian: {
      type: STRING(50),
    },
    web_mail: {
      type: STRING(50),
    },
    web_blackip: {
      type: STRING(255),
    },
    web_version: {
      type: STRING(10),
    },
    web_keywords: {
      type: STRING(255),
    },
    web_description: {
      type: STRING(255),
    },
    web_time: {
      type: STRING(50),
    },
    web_tongji: {
      type: STRING(255),
    },
    web_copyright: {
      type: STRING(30),
    },
    comment_open: {
      type: INTEGER,
      defaultValue: 1,
    },
    web_avatar: {
      type: STRING(50),
    },
    web_logo: {
      type: STRING(50),
    },
    web_zan: {
      type: INTEGER,
      defaultValue: 0,
    },
    web_author: {
      type: STRING(100),
    },
    ad_float: {
      type: TEXT,
    },
    ad_aside: {
      type: TEXT,
    },
    ad_index: {
      type: TEXT,
    },
    ad_status: {
      type: INTEGER,
      defaultValue: 0,
    },
  },
  { initialAutoIncrement: '10000' },
  );

  // Basesetting.sync();

  return Basesetting;
};
