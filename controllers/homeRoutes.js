const router = require('express').Router();
const { Post, Comment, User } = require('../models');


router.get('/', async (req, res) => {
  try {
    const result = [];
    Post.findAll({include: [{
      model: User,
      as: "user",
      attributes: ["user_name"]}
    ]}).then((posts) => {
      console.log(posts);
      posts.forEach((post) => result.push({
        "id": post.id,
        "topic": post.topic,
        "content": post.post_text,
        "timestamp": post. date_time_of_post,
        "username": post.user.user_name
      }));      
      console.log(result);
      res.render('homepage', {list: result});
    });     
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
  try {
    res.render('dashboard');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/new-post', async (req, res) => {
  try {
    res.render('newpost');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    Post.findOne({where: {id: req.params.id}, include: [{
      model: User,
      as: "user",
      attributes: ["user_name"]}
    ]}).then((post) => { 
      const result = {
        "id": post.id,
        "topic": post.topic,
        "content": post.post_text,
        "timestamp": post. date_time_of_post,
        "username": post.user.user_name
      };
      res.render('displaypost', {post: result});
     });      
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id/comments', async (req, res) => {
  try {
    Comment.findAll({where: {topic_id: req.params.id}, include: [{
      model: Post,
      as: "post",
      attributes: ["topic"]}
    ]}).then((comment) => { 
      const result = {
        "id": comment.id,
        "content": comment.comment_text,
        "timestamp": comment.date_time_of_post,
        "username": 'Yoou'
      };
      res.render('displaycomments', {comment: result});
     });      
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id/edit', async (req, res) => {
  try {
    Post.findOne({where: {id: req.params.id}}).then((post) => { 
      const result = {
        "id": post.id,
        "topic": post.topic,
        "content": post.post_text
      };
      res.render('editpost', {post: result});
     });      
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
