const Joi = require('joi');
const RequestError = require('../utils/RequestError');

const MISSING_FIELD = '400|Some required fields are missing';

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': MISSING_FIELD,
  }),
  password: Joi.string().required().messages({
    'string.empty': MISSING_FIELD,
  }),
});

module.exports = {
  loginSchema,
  convertToRequestError: (validationError) => {
    const { message } = validationError.details[0];
    return RequestError.fromCompositeMessage(message);
  },
};
