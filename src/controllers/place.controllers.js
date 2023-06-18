const { uploadToCloudinary } = require("../utils/cloudinary");
const imageDownloader = require("image-downloader");
const catchError = require("../utils/catchError");
const Place = require("../models/Place");

const getAll = catchError(async (req, res) => {
  const results = await Place.findAll();
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const result = await Place.create(req.body);
  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Place.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await Place.destroy({ where: { id } });
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await Place.update(req.body, {
    where: { id },
    returning: true,
  });
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

const download = catchError(async (req, res) => {
  const { link } = req.body;
  const newName = Data.now() + ".jpg";
  await imageDownloader.image({
    url: link,
    dest: __dirname + "/uploads" + newName,
  });

  return res.json(__dirname + "/uploads" + newName);
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
  download,
};
