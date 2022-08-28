const userService = require('../services/userService');

module.exports = {
  login: async (req, res) => {
    const { body: login } = req;
    const token = await userService.login(login);
    req.headers.authorization = token;
    return res.status(200).json({ token });
  },

  create: async (req, res) => {
    const { body: newUser } = req;
    const token = await userService.create(newUser);
    req.headers.authorization = token;
    res.status(201).json({ token });
  },

  findAll: async (_req, res) => {
    const users = await userService.findAll();
    res.status(200).json(users);
  },

  findByPk: async (req, res) => {
    const { params: { id } } = req;
    const user = await userService.findByPk(id);
    res.status(200).json(user);
  },

  // destroyCurrentUser: async (req, res) => {

  // },
};
