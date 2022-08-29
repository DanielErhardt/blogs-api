const Joi = require('joi');
const RequestError = require('../utils/RequestError');

const MISSING_FIELD = '400|Some required fields are missing';
const REQUIRED_FIELD = '400|{#label} is required';
const STRING_MIN = '400|{#label} length must be at least {#limit} characters long';

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': MISSING_FIELD,
  }),
  password: Joi.string().required().messages({
    'string.empty': MISSING_FIELD,
  }),
});

const createUserSchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.min': STRING_MIN,
  }),
  email: Joi.string().email().required().messages({
    'string.email': '400|{#label} must be a valid email',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': STRING_MIN,
  }),
  image: Joi.string().required(),
});

const categorySchema = Joi.object({
  name: Joi.string().required(),
}).messages({
  'any.required': REQUIRED_FIELD,
});

const createPostSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.empty': MISSING_FIELD,
  }),
  content: Joi.string().required().messages({
    'string.empty': MISSING_FIELD,
  }),
  categoryIds: Joi.array().items(Joi.number()).required(),
});

const editPostSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.empty': MISSING_FIELD,
  }),
  content: Joi.string().required().messages({
    'string.empty': MISSING_FIELD,
  }),
});

module.exports = {
  loginSchema,
  createUserSchema,
  categorySchema,
  createPostSchema,
  editPostSchema,
  convertToRequestError: (validationError) => {
    const [code, message] = validationError.details[0].message.split('|');
    return new RequestError(message, code);
  },
};
