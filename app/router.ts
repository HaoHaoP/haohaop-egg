import { Application } from 'egg';

/**
 * 构建路径
 * @param p 路径
 */
const buildPath = (p: string) => {
  return `/api/v1/${p}`;
};

export default (app: Application) => {
  const { controller, router } = app;
  const jwt = app.middleware.jwt(app.config.jwt);
  router.post(buildPath('user/register'), controller.user.register);
  router.post(buildPath('user/login'), controller.user.login);
  router.get('/hello', jwt, controller.home.index);
  router.post(buildPath('user/logout'),
    app.middleware.jwt({
      ...app.config.jwt,
      isRevoked: true,
    }),
  );
};
