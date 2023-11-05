const { StatusCodes } = require("http-status-codes");
const customApiError = require("./customApiError");

class badRequestError extends customApiError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.BAD_REQUEST;
  }
}

module.exports = badRequestError;
