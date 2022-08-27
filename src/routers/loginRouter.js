const router = require('express').Router();
const rescue = require('express-rescue');
const userController = require('../controllers/userController');
const loginVerifier = require('../middlewares/loginVerifier');

router.post('/', loginVerifier, rescue(userController.login));

module.exports = router;
