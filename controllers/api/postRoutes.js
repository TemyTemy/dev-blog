const router = require('express').Router();
const { Post } = require('../../models');
router.post('/', async (req, res) => {
  console.log(req.body);  
  try {
    const payLoad = {
        topic: req.body.topic,
        post_text: req.body.content,
        posted_by_user_id: req.body.userId,
        date_time_of_post: new Date()
    };
    Post.create(payLoad).then((post) =>res.json(post.id));    
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;