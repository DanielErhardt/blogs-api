const { createUserSchema, convertToRequestError } = require('./validations');

module.exports = (req, _res, next) => {
  const { body: newUser } = req;
  const { error } = createUserSchema.validate(newUser);
  
  if (error) next(convertToRequestError(error));

  next();
};