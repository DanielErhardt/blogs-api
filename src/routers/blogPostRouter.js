const router = require('express').Router();
const rescue = require('express-rescue');
const blogPostController = require('../controllers/blogPostController');
const { authenticate, verifyPostCreation, verifyPostEditing } = require('../middlewares');

router.get('/', authenticate, rescue(blogPostController.findAll));

router.get('/:id', authenticate, rescue(blogPostController.findByPk));

router.post('/', authenticate, verifyPostCreation, rescue(blogPostController.create));

router.put('/:id', authenticate, verifyPostEditing, rescue(blogPostController.edit));

router.delete('/:id', authenticate, rescue(blogPostController.destroy));

module.exports = router;
