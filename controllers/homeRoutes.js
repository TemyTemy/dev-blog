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
      res.render('homepage', {list: result, logged_in: req.session.logged_in});
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
    Post.findOne({where: {id: req.params.id}, include: [{
      model: Comment,
      as: "comments",
      attributes: ["comment_text", "date_time_of_post", "posted_by_user_name"]},
      { model: User, as: "user", attributes: ["user_name"]}]}).then((post) => { 
      const list = [];
      if(post.comments) {
        console.log(post.commments);
        post.comments.forEach((comment) => {
          const cm = {
            "id": comment.id,
            "content": comment.comment_text,
            "timestamp": comment.date_time_of_post,
            "username": comment.posted_by_user_name
          };
          list.push(cm);
        });
      }
      
      const result = {
        "logged_in": req.session.logged_in,
        "list": list,
        "topic": post.topic,
        "id": post.id,
        "blog_content": post.post_text,
        "timestamp": post.date_time_of_post,
        "username": post.user.user_name
      };
      console.log(post);
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

router.get('/login', async (req, res) => {
  try {    
      res.render('login');     
  } catch (err) {
    res.status(500).json(err);
  }
});

login_button
module.exports = router;
