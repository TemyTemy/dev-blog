const { Comment } = require('../models');

const commentData = [
  {
    topic: 'Sample',
    post_text: 'None',
    posted_by_user_id: 1,
    date_time_of_post: new Date()
  }
];

const seedComments = () => {
    Comment.bulkCreate(commentData);
    Comment.destroy({where: {}});
};

module.exports = seedComments;