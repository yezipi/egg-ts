import { Application } from 'egg';

// 个性化设置
export default (app: Application) => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;
  const Customsetting: any = app.model.define('zzc_customsetting', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    web_style: {
      type: INTEGER,
      defaultValue: 0,
    },
    web_font: {
      type: STRING(100),
      defaultValue: 'Microsoft YaHei',
    },
    web_bg: {
      type: TEXT,
    },
    current_bg: {
      type: STRING(50),
    },
    web_autobg: {
      type: INTEGER,
      defaultValue: 0,
    },
  },
  { initialAutoIncrement: '10000' },
  );

  Customsetting.sync();

  return Customsetting;
};
