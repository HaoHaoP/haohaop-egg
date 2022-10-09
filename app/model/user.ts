export default app => {
  const mongoose = app.mongoose; // 使用的插件可以通过app直接访问
  const Schema = mongoose.Schema;
  const UserSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now(),
      },
      name: {
        type: String,
        required: true,
      },
    },
    { versionKey: false },
  );
  return mongoose.model('User', UserSchema, 'user');
};
