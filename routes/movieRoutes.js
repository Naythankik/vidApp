const express = require("express");
const {
  createMovie,
  getMovies,
  updateAMovie,
  getAMovie,
  deleteAMovie,
} = require("../src/controllers/movieController");

const Router = express.Router();

Router.route("/").post(createMovie).get(getMovies);
Router.route("/:id").get(getAMovie).put(updateAMovie).delete(deleteAMovie);

module.exports = Router;
