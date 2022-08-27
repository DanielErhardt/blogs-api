const Joi = require('joi');
const RequestError = require('../utils/RequestError');

const MISSING_FIELD = '400|Some required fields are missing';
const STRING_MIN = '400|{#label} length must be at least {#limit} characters long';

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': MISSING_FIELD,
  }),
  password: Joi.string().required().messages({
    'string.empty': MISSING_FIELD,
  }),
});

const postUserSchema = Joi.object({
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

module.exports = {
  loginSchema,
  postUserSchema,
  convertToRequestError: (validationError) => {
    const { message } = validationError.details[0];
    return RequestError.fromCompositeMessage(message);
  },
};
