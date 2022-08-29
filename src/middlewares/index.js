const authenticate = require('./authenticate');
const verifyLogin = require('./verifyLogin');
const verifyUserCreation = require('./verifyUserCreation');
const verifyCategory = require('./verifyCategory');
const verifyPostCreation = require('./verifyPostCreation');
const verifyPostEditing = require('./verifyPostEditing');

module.exports = {
  authenticate,
  verifyLogin,
  verifyUserCreation,
  verifyCategory,
  verifyPostCreation,
  verifyPostEditing,
};
