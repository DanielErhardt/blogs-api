const blogPostService = require('../services/blogPostService');

module.exports = {
  // findAll: async (req, res) => {

  // },
  
  // findByPk: async (req, res) => {

  // },

  create: async (req, res) => {
    const { body: newPost, headers: { userId } } = req;
    newPost.userId = userId;
    const createdPost = await blogPostService.create(newPost);
    res.status(201).json(createdPost);
  },

  // edit: async (req, res) => {

  // },

  // destroy: async (req, res) => {

  // },
};
