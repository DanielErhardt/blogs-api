const router = require('express').Router();
const rescue = require('express-rescue');
const controller = require('../controllers/userController');
const { verifyUserCreation, authenticate } = require('../middlewares');

router.get('/', authenticate, rescue(controller.findAll));

router.get('/:id', authenticate, rescue(controller.findByPk));

router.post('/', verifyUserCreation, rescue(controller.create));

router.delete('/me', authenticate, rescue(controller.destroyCurrentUser));

module.exports = router;
