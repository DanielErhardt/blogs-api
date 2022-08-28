const categoryService = require('../services/categoryService');

module.exports = {
  // findAll: async (req, res) => {

  // },

  create: async (req, res) => {
    const { body: { name } } = req;
    const newCategory = await categoryService.create(name);
    res.status(201).json(newCategory);
  },
};
