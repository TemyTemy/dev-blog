const { User, Post } = require('../models');

const userData = [
  {
    user_name: 'Sample',
    password: 'None'
  }
];

const seedUsers = () => {
    User.bulkCreate(userData);
    User.destroy({where: {}})
};

module.exports = seedUsers;