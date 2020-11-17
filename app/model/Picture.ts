import { Application } from 'egg';

// 图片表
export default (app: Application) => {
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;
  const Picture: any = app.model.define('zzc_picture', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    album_id: INTEGER,
    name: STRING(30),
    thumb_path: STRING,
    origin_path: STRING,
    description: STRING,
    status: {
      type: INTEGER,
      defaultValue: 0,
    },
    is_recommend: {
      type: BOOLEAN,
      defaultValue: false,
    },
    hit: {
      type: INTEGER,
      defaultValue: 0,
    },
  },
  { initialAutoIncrement: '10000' },
  );

  // 表关联
  Picture.associate = () => {
    Picture.belongsTo(app.model.Album, { foreignKey: 'album_id', as: 'albums' });
  };

  // Picture.sync();

  return Picture;
};
