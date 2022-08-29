const router = require('express').Router();
const rescue = require('express-rescue');
const blogPostController = require('../controllers/blogPostController');
const { authenticate, verifyBlogPost } = require('../middlewares');

// router.get('/', rescue(blogPostController.findAll));

// router.get('/:id', rescue(blogPostController.findByPk));

router.post('/', authenticate, verifyBlogPost, rescue(blogPostController.create));

// router.put('/:id', rescue(blogPostController.edit));

// router.delete('/:id', rescue(blogPostController.destroy));

module.exports = router;
