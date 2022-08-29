const blogPostService = require('../services/blogPostService');

module.exports = {
  findAll: async (_req, res) => {
    const allPosts = await blogPostService.findAll();
    res.status(200).json(allPosts);
  },
  
  findByPk: async (req, res) => {
    const { params: { id } } = req;
    const post = await blogPostService.findByPk(id);
    res.status(200).json(post);
  },

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
