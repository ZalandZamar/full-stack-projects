const customApiError = require("./custom-error");
const { StatusCodes } = require("http-status-codes");

class BadReqest extends customApiError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadReqest;
