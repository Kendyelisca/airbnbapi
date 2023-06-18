const express = require("express");
const userRouter = require("./user.router");
const placeRouter = require("./place.router");
const imageRouter = require("./image.router");
const downloaderRouter = require("./download.router");
const router = express.Router();

// colocar las rutas aquí

router.use("/registers", userRouter);
router.use("/places", placeRouter);
router.use("/images", imageRouter);
router.use("/downloads", downloaderRouter);
module.exports = router;
