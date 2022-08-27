const { postUserSchema, convertToRequestError } = require('./validations');

module.exports = (req, _res, next) => {
  const { body: newUser } = req;
  const { error } = postUserSchema.validate(newUser);
  
  if (error) next(convertToRequestError(error));

  next();
};