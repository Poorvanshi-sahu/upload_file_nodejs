const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connect");
const port = process.env.PORT || 3000;
const { StatusCodes } = require("http-status-codes");
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

app.get("/", (req, res) => {
  res.send("yup");
});
app.use(notFound);
app.use(errorHandler);

const start = async () => {
  await connectDB(process.env.MONGO_URI).then(() => console.log("Connected"));
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
};

start();
