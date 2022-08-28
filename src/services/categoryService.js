const { Category } = require('../database/models');

module.exports = {
  findAll: async () => Category.findAll(),
  
  create: async (name) => Category.create({ name }),
};
