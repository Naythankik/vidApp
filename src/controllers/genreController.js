const validateGenre = require("../middlewares/genreMiddleware");
const Genre = require("../models/genreModel");

const getGenres = async (req, res) => {
  try {
    const genres = await Genre.find().sort("name");
    res.send({ genre: genres });
  } catch (error) {
    throw new Error(error);
  }
  return;
};

const createGenre = async (req, res) => {
  const { error, value } = validateGenre(req.body);

  if (error) throw new Error(error.details[0].message);

  try {
    const genre = await Genre.create(value);

    res.send("Genre has been created successfully");
  } catch (error) {
    throw new Error(error);
  }
};

const updateAGenre = async (req, res) => {
  const { id } = req.params;
  try {
    await Genre.findByIdAndUpdate(id, { $set: req.body });
    res.send("Genre has been updated");
  } catch (error) {
    throw new Error(error);
  }
};

const deleteAGenre = async (req, res) => {
  const { id } = req.params;
  try {
    await Genre.findByIdAndDelete(id);
    res.send("Genre has been deleted");
  } catch (error) {
    throw new Error(error);
  }
};

const getAGenre = async (req, res) => {
  const { id } = req.params;
  try {
    const genre = await Genre.findById(id);
    res.send(genre);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getGenres,
  createGenre,
  getAGenre,
  updateAGenre,
  deleteAGenre,
};
