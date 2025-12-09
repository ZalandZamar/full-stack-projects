const errorHandlerMiddleware = (err, req, res, next) => {
  return res.status(err.status).json({ messge: err.message });
};

module.exports = errorHandlerMiddleware;
