const catchError = require("../utils/catchError");
const Image = require("../models/Image");
const { uploadToCloudinary } = require("../utils/cloudinary");

const getAll = catchError(async (req, res) => {
  const image = await Image.findAll();
  return res.json(image);
});
const create = catchError(async (req, res) => {
  const { path, filename } = req.file;
  const { url, public_id } = await uploadToCloudinary(path, filename);
  const image = await Image.create({ url, publicId: public_id });
  return res.status(201).json(image);
});
const remove = catchError(async (req, res) => {
  const { id } = req.params;
  const image = await Image.findByPk(id);
  if (!image) return res.sendStatus(404);
  await deleteFromCloudinary(image.publicId);
  await image.destroy();
  return res.sendStatus(204);
});

const download = catchError(async (req, res) => {});

module.exports = {
  getAll,
  create,
  remove,
};
