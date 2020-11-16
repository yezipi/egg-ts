import { Application } from 'egg';

export default async (app: Application) => {
  const { STRING, INTEGER, BOOLEAN, TEXT } = app.Sequelize;
  const Column = app.model.define('columns', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    alias: STRING(30),
    url: STRING(30),
    status: INTEGER,
    type: STRING(20),
    new_window: {
      type: BOOLEAN,
      defaultValue: false,
    },
    sort: {
      type: INTEGER,
      defaultValue: 1,
    },
    can_delete: {
      type: BOOLEAN,
      defaultValue: false,
    },
    keywords: STRING(100),
    description: STRING(100),
    content: TEXT,
  },
  { initialAutoIncrement: '10000' },
  );

  const cloumnDefaultData = [
    { name: '文章', url: 'article', sort: 7 },
    { name: '案例', url: 'case', sort: 6 },
    { name: '微语', url: 'mood', sort: 5 },
    { name: '相册', url: 'album', sort: 4 },
    { name: '友链', url: 'blogroll', sort: 3 },
    { name: '留言', url: 'feedback', sort: 2 },
    { name: '关于', url: 'about', sort: 1 },
  ];

  Column.sync().then(() => {
    // 先查出所有的数据, 遍历，没有的就插入
    Column.findAll({ attributes: [ 'url' ] }).then((data: any) => {
      const urls = data.map((e: any) => e.url);
      cloumnDefaultData.forEach((e: any) => {
        if (urls.indexOf(e.url) < 0) {
          Column.create({
            name: e.name,
            url: e.url,
            type: e.url,
            alias: e.name,
            content: e.name,
          });
        }
      });
    });
  });

  return Column;
};
