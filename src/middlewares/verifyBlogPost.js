const { blogPostSchema, convertToRequestError } = require('./validations');

module.exports = (req, _res, next) => {
  const { body: newPost } = req;
  const { error } = blogPostSchema.validate(newPost);

  if (error) next(convertToRequestError(error));

  next();
};
