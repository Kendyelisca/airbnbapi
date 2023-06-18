const { create } = require("../controllers/download.controllers");
const express = require("express");

const downloaderRouter = express.Router();

downloaderRouter.route("/").post(create);

module.exports = downloaderRouter;
