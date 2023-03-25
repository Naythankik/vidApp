const validateMovie = require("../middlewares/movieMiddleware");
const Genre = require("../models/genreModel");
const Movie = require("../models/movieModel");

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find().populate("genre").sort("title");
    res.send({ movies: movies });
  } catch (error) {
    throw new Error(error);
  }
  return;
};

const createMovie = async (req, res) => {
  const { error, value } = validateMovie(req.body);

  if (error) throw new Error(error.details[0].message);

  try {
    const genre = await Genre.findOne({ name: value.genre });

    if (!genre) {
      const newGenre = await Genre.create({ name: value.genre });
      value.genre = newGenre.id;
    } else {
      value.genre = genre.id;
    }

    const movie = await Movie.create(value);

    res.send({ message: movie });
  } catch (error) {
    throw new Error(error);
  }
};

const updateAMovie = async (req, res) => {
  const { id } = req.params;
  const { genre } = req.body;

  if (genre) {
    //check if the genre exist in the model
    const findGenre = await Genre.findOne({ name: genre });

    if (!findGenre) {
      const newGenre = await Genre.create({ name: genre });
      req.body.genre = newGenre.id;
    } else {
      req.body.genre = findGenre.id;
    }
  }

  try {
    await Movie.findByIdAndUpdate(id, {
      title: req.body?.title,
      numberInStock: req.body?.numberInStock,
      $addToSet: { genre: req.body.genre },
    });
    res.send("Movie has been updated");
  } catch (error) {
    throw new Error(error);
  }
  return;
};

const deleteAMovie = async (req, res) => {
  const { id } = req.params;
  try {
    await Movie.findByIdAndDelete(id);
    res.send("Movie has been deleted");
  } catch (error) {
    throw new Error(error);
  }
};

const getAMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    res.send(movie);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getMovies,
  createMovie,
  getAMovie,
  updateAMovie,
  deleteAMovie,
};
