const { Category } = require('../database/models');

module.exports = {
  findAll: async () => {

  },

  create: async (name) => Category.create({ name }),
};
