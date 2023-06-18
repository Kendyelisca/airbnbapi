const {
  getAll,
  create,
  getOne,
  remove,
  update,
  download,
} = require("../controllers/place.controllers");
const express = require("express");
const upload = require("../utils/multer");

const placeRouter = express.Router();

placeRouter.route("/").get(getAll).post(create);
placeRouter.route("/download").post(download);

placeRouter.route("/:id").get(getOne).delete(remove).put(update);

module.exports = placeRouter;
