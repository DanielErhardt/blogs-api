const { categorySchema, convertToRequestError } = require('./validations');

module.exports = (req, _res, next) => {
  const { body: category } = req;
  const { error } = categorySchema.validate(category);

  if (error) next(convertToRequestError(error));

  next();
};
