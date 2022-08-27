const router = require('express').Router();
const rescue = require('express-rescue');
const controller = require('../controllers/userController');
const { verifyUserCreation } = require('../middlewares');

// router.get('/', rescue(controller.findAll));

router.get('/:id', rescue(controller.findByPk));

router.post('/', verifyUserCreation, rescue(controller.create));

// router.delete('/me', rescue(controller.destroyCurrentUser));

module.exports = router;
