import { Service } from 'egg';

export default class UserService extends Service {
  // 根据邮箱查找用户
  async find(params) {
    const { ctx } = this;
    try {
      return await ctx.model.User.findOne({ email: params.email });
    } catch (err) {
      return {
        code: 500,
        msg: JSON.stringify(err),
      };
    }
  }

  // 注册用户
  async create(params) {
    const { ctx } = this;
    try {
      return await ctx.model.User.create(Object.assign({}, params));
    } catch (err) {
      return {
        code: 500,
        msg: JSON.stringify(err),
      };
    }
  }
}
