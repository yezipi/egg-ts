import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {
    sequelize: {
      username: 'root',
      password: 'qun931120',
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      database: 'blog',
    },
  };
  return config;
};
