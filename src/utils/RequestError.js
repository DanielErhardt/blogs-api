class RequestError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }

  static nonexistentCategoryIds() {
    return new RequestError('"categoryIds" not found', 400);
  }

  static userNotFound() {
    return new RequestError('User does not exist', 404);
  }

  static tokenNotFound() {
    return new RequestError('Token not found', 401);
  }

  static invalidToken() {
    return new RequestError('Expired or invalid token', 401);
  }

  static invalidFields() {
    return new RequestError('Invalid fields', 400);
  }

  static userAlreadyRegistered() {
    return new RequestError('User already registered', 409);
  }
}

module.exports = RequestError;
