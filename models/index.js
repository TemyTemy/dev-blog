// import models
const Post = require('./Post');
const User = require('./User');

User.hasMany(Post, {as: "posts", foreignKey: "posted_by_user_id"});
Post.belongsTo(User, {
  foreignKey: "posted_by_user_id",
  as: "user",
});

module.exports = {
  Post,
  User
};