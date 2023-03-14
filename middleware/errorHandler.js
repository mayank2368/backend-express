const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR_:
      res.json({
        title: "Validation failed",
        message: err.message,
        stacktrace: err.stack,
      });

    case constants.NOT_FOUND:
      res.json({
        title: "Not found",
        message: err.message,
        stacktrace: err.stack,
      });

    case constants.UNAUTHORIZED:
      res.json({
        title: "UNAUTHORIZED",
        message: err.message,
        stacktrace: err.stack,
      });

    case constants.FORBIDDEN:
      res.json({
        title: "FORBIDDEN",
        message: err.message,
        stacktrace: err.stack,
      });

    case constants.SERVER_ERROR:
      res.json({
        title: "FORBIDDEN",
        message: err.message,
        stacktrace: err.stack,
      });
    default:
      console.log("Kein error, Alles Gut!!!");
      break;
  }
};

module.exports = errorHandler;
