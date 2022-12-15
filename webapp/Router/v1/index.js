const Express = require("express");
const movieRouter = require("./Movie");

const v1Router = Express.Router();

v1Router.use("/movie", movieRouter);

module.exports = v1Router;
