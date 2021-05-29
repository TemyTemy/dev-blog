const { Post } = require('../models');

const postData = [
  {
    topic: 'Sample',
    post_text: 'None',
    posted_by_user_id: 1,
    date_time_of_post: new Date()
  }
];

const seedPosts = () => {
    Post.bulkCreate(postData);
    Post.destroy({where: {}});
};

module.exports = seedPosts;