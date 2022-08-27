module.exports = async (error, _req, res, _next) => {
  const { statusCode, message, stack } = error;
  return statusCode
    ? res.status(statusCode).json({ message })
    : res.status(500).json({ message: 'Run to the hills!', stack });
};
