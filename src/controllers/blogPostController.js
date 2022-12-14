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

  search: async (req, res) => {
    const { query: { q } } = req;
    const post = await blogPostService.search(q);
    res.status(200).json(post);
  },

  edit: async (req, res) => {
    const {
      params: { id: postId },
      headers: { userId },
      body: { title, content },
    } = req;
  
    const editedPost = await blogPostService.edit({ postId, userId, title, content });
    res.status(200).json(editedPost);
  },

  destroy: async (req, res) => {
    const { params: { id: postId }, headers: { userId } } = req;
    await blogPostService.destroy({ postId, userId });
    res.status(204).json();
  },
};
