const userService = require('../services/userService');

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const token = await userService.login({ email, password });
    return res.status(200).json({ token });
  },

  create: async (req, res) => {

  },

  findAll: async (req, res) => {

  },

  findByPk: async (req, res) => {

  },

  destroyCurrentUser: async (req, res) => {

  },
};
