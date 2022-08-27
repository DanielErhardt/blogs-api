const token = require('../utils/token');
const RequestError = require('../utils/RequestError');

module.exports = async (req, _res, next) => {
  const { headers: { authorization } } = req;
  if (!authorization) next(RequestError.tokenNotFound());

  try {
    token.verify(authorization);
    next();
  } catch (error) {
    next(RequestError.invalidToken());
  }
};
