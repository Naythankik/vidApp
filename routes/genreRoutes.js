const express = require("express");
const {
  createGenre,
  getAGenre,
  getGenres,
  updateAGenre,
  deleteAGenre,
} = require("../src/controllers/genreController");

const Router = express.Router();

Router.route("/").post(createGenre).get(getGenres);
Router.route("/:id").get(getAGenre).put(updateAGenre).delete(deleteAGenre);

module.exports = Router;
