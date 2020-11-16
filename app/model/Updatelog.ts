import { Application } from 'egg';

// 版本更新日志表
export default (app: Application) => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;
  const Updatelog: any = app.model.define('zzc_updatelog', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    content: TEXT,
    type: STRING,
  },
  { initialAutoIncrement: '10000' },
  );

  Updatelog.sync();

  return Updatelog;
};
