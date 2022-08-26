const router = require('express').Router();
const controller = require('../controllers/userController');

router.get('/', controller.findAll);

router.get('/:id', controller.findByPk);

router.post('/', controller.create);

router.delete('/me', controller.destroyCurrentUser);

module.exports = router;
