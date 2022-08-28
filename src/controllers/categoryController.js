const categoryService = require('../services/categoryService');

module.exports = {
  findAll: async (_req, res) => {
    const categories = await categoryService.findAll();
    res.status(200).json(categories);
  },

  create: async (req, res) => {
    const { body: { name } } = req;
    const newCategory = await categoryService.create(name);
    res.status(201).json(newCategory);
  },
};
