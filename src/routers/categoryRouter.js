const router = require('express').Router();
const categoryController = require('../controllers/categoryController');
const { authenticate, verifyCategory } = require('../middlewares');

router.get('/', authenticate, categoryController.findAll);

router.post('/', authenticate, verifyCategory, categoryController.create);

module.exports = router;
