class RequestError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }

  static invalidFields() {
    return new RequestError('Invalid fields', 400);
  }

  static fromCompositeMessage(compositeMessage) {
    const [code, message] = compositeMessage.split('|');
    return new RequestError(message, code);
  }
}

module.exports = RequestError;
