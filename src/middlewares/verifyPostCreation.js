const { createPostSchema, convertToRequestError } = require('./validations');

module.exports = (req, _res, next) => {
  const { body: newPost } = req;
  const { error } = createPostSchema.validate(newPost);

  if (error) next(convertToRequestError(error));

  next();
};
