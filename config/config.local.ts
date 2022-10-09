import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {
    mongoose: {
      client: {
        url: 'mongodb://127.0.0.1/test',
        options: {},
      },
    },
    jwt: {
      secret: 'admin',
    },
    security: {
      csrf: {
        enable: false,
      },
    },
  };
  return config;
};
