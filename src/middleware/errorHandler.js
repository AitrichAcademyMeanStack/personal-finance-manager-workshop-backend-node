const logger = require("./logger.js")

 function errorHandler(error, req, res, next) {
  const status = error.statusCode || 500;
  const message = error.message;
  logger.error(`${req.path} ${message}`);
  res.status(status).json({ message: message, status: status });
}

module.exports = errorHandler
