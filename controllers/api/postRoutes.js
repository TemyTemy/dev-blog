const router = require('express').Router();
const { Post, Comment } = require('../../models');
router.post('/', async (req, res) => {
  console.log(req.body);  
  try {
    const payLoad = {
        topic: req.body.topic,
        post_text: req.body.content,
        posted_by_user_id:  req.session.user_id,
        date_time_of_post: new Date()
    };
    Post.create(payLoad).then((post) =>res.json(post.id));    
  } catch (err) {
    res.status(500).json(err);
  }
});

router.patch('/:id', async (req, res) => {
  console.log(req.body);  
  try {
    const message = {
       message: 'ok'
    };
    const payLoad = {
      topic: req.body.topic,
      post_text: req.body.content
    };
  Post.update(payLoad,
    {where: {id: req.params.id}}).then((post) =>res.json(message));    
 } catch (err) {
     res.status(500).json(err);
 }
});


router.patch('/:id/comment', async (req, res) => {
    console.log(req.body);  
    try {
      const message = {
         message: 'ok'
      };
      const payLoad = {
        topic_id: req.params.id,
        comment_text: req.body.content,
        posted_by_user_name:  req.session.user_name,
        date_time_of_post: new Date()
      };
    Comment.create(payLoad).then(() =>res.json(message));    
   } catch (err) {
       res.status(500).json(err);
   }
  });

router.delete('/:id', async (req, res) => {
  try {
    const result = {
    message: 'ok'
    };
    Post.destroy({where: {id: req.params.id}}).then(() => res.json(result));      
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;