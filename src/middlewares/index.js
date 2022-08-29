const authenticate = require('./authenticate');
const verifyLogin = require('./verifyLogin');
const verifyUserCreation = require('./verifyUserCreation');
const verifyCategory = require('./verifyCategory');
const verifyBlogPost = require('./verifyBlogPost');

module.exports = {
  authenticate,
  verifyLogin,
  verifyUserCreation,
  verifyCategory,
  verifyBlogPost,
};
