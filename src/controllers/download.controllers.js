const catchError = require("../utils/catchError");
const Download = require("../models/Download");
const imageDownloader = require("image-downloader");
const path = require("path");

const create = catchError(async (req, res) => {
  const { link } = req.body;
  const newName = "Photo" + Date.now() + ".jpg";
  const destPath = path.join(__dirname, "../uploads", newName);

  await imageDownloader.image({
    url: link,
    dest: destPath,
  });

  return res.json({ status: "success", fileURL: `/uploads/${newName}` });
});

module.exports = {
  create,
};
