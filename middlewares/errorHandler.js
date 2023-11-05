const { StatusCodes } = require("http-status-codes");

const errorHandler = (err, req, res, next) => {
  return res
    .status(StatusCodes.NOT_FOUND)
    .json({ success: false, msg: "Something is  wrong" });
};

module.exports = errorHandler;
