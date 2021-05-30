const router = require('express').Router();
const { Post, User } = require('../models');


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
    res.render('displaypost');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id/comments', async (req, res) => {
  try {
    res.render('displaycomments');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id/edit', async (req, res) => {
  try {
    res.render('editpost');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
