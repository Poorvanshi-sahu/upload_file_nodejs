const notFound = (req, res) => {
  return res
    .status(StatusCodes.NOT_FOUND)
    .json({ success: false, msg: "Route Not found" });
};

module.exports = notFound;
