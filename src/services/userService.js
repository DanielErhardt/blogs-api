const { User } = require('../database/models');
const token = require('../utils/token');

const RequestError = require('../utils/RequestError');

module.exports = {
  login: async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });
    
    if (!user || user.password !== password) throw RequestError.invalidFields();

    return token.create({ id: user.id });
  },

  create: async (newUserReq) => {
    const { email } = newUserReq;
    const user = await User.findOne({ where: { email } });

    if (user) throw RequestError.userAlreadyRegistered();

    const newUser = await User.create(newUserReq);

    return token.create({ id: newUser.id });
  },

  findAll: async () => User.findAll({ attributes: { exclude: ['password'] } }),

  findByPk: async (id) => {
    const user = await User.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
    });

    if (!user) throw RequestError.userNotFound();

    return user;
  },

  // destroy: async (id) => {

  // },
};
