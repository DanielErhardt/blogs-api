const router = require('express').Router();
const rescue = require('express-rescue');
const userController = require('../controllers/userController');
const { verifyLogin } = require('../middlewares');

router.post('/', verifyLogin, rescue(userController.login));

module.exports = router;
