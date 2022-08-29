module.exports = async (error, _req, res, _next) => {
  const { statusCode, message, errors, parent, fields, original, sql, stack } = error;
  return statusCode
    ? res.status(statusCode).json({ message })
    : res
      .status(500)
      .json({ message: 'Run to the hills!', sql, errors, parent, fields, original, stack });
};
