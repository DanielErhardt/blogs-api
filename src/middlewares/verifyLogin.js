const { loginSchema, convertToRequestError } = require('./validations');

module.exports = (req, _res, next) => {
  const { body: login } = req;
  const { error } = loginSchema.validate(login);
  
  if (error) next(convertToRequestError(error));
  
  next();
};
