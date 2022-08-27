const { User } = require('../database/models');
const token = require('../utils/token');

const RequestError = require('../utils/RequestError');

module.exports = {
  login: async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });
    
    if (!user || user.password !== password) throw RequestError.invalidFields();

    const newToken = token.create({ id: user.id });

    return newToken;
  },

  create: async ({ email, password }) => {

  },

  findAll: async () => {

  },

  findByPk: async (id) => {

  },

  destroy: async (id) => {

  },
};
