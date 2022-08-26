module.exports = async (err, _req, res, _next) => {
  const { statusCode, message } = err;
  return statusCode
    ? res.status(statusCode).json({ message })
    : res.status(500).json({ message: 'Run to the hills!', error: err });
};