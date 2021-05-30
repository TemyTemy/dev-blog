// import models
const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User');

User.hasMany(Post, {as: "posts", foreignKey: "posted_by_user_id"});
Post.belongsTo(User, {
  foreignKey: "posted_by_user_id",
  as: "user",
});

Post.hasMany(Comment, {as: "comments", foreignKey: "topic_id"});
Comment.belongsTo(Post, {
  foreignKey: "topic_id",
  as: "post",
});

module.exports = {
  Post,
  Comment,
  User
};