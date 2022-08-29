const token = require('../utils/token');
const RequestError = require('../utils/RequestError');

module.exports = async (req, _res, next) => {
  const { headers: { authorization } } = req;
  if (!authorization) next(RequestError.tokenNotFound());

  try {
    const { id: userId } = token.verify(authorization);
    req.headers.userId = userId;
    next();
  } catch (error) {
    next(RequestError.invalidToken());
  }
};
