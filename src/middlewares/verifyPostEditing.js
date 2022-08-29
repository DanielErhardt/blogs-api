const { editPostSchema, convertToRequestError } = require('./validations');

module.exports = (req, res, next) => {
  const { body: post } = req;
  const { error } = editPostSchema.validate(post);
  
  if (error) next(convertToRequestError(error));

  next();
};
