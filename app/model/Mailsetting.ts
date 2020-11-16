import { Application } from 'egg';

// 个性化设置
export default (app: Application) => {
  const { STRING, INTEGER } = app.Sequelize;
  const Mailsetting: any = app.model.define('zzc_mailsetting', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    send_nickname: {
      type: STRING(100),
    },
    hosts: {
      type: STRING(100),
    },
    port: {
      type: STRING(100),
    },
    send_mail: {
      type: STRING(100),
    },
    send_pwd: {
      type: STRING(100),
    },
    receive_mail: {
      type: STRING(100),
    },
    send_title: {
      type: STRING(100),
    },
    receive_title: {
      type: STRING(100),
    },
    receive_notice: {
      type: INTEGER,
      defaultValue: 0,
    },
  },
  { initialAutoIncrement: '10000' },
  );

  Mailsetting.sync();

  return Mailsetting;
};
