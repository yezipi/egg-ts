import { Application } from 'egg';

// 用户行为日志表
export default (app: Application) => {
  const { STRING, INTEGER } = app.Sequelize;
  const Browselog: any = app.model.define('zzc_browselog', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id: STRING,
    ip: STRING,
    nation: STRING(30),
    province: STRING(30),
    city: STRING(30),
    district: STRING(30),
    address: STRING(100),
    page_name: STRING,
    page_url: STRING(100),
    stay_time: STRING(30),
    lat: INTEGER,
    lng: INTEGER,
    ua: INTEGER,
  },
  { initialAutoIncrement: '10000' },
  );

  // Browselog.sync();

  return Browselog;
};
