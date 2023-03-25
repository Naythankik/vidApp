const express = require("express");
const {
  createRental,
  getRental,
} = require("../src/controllers/rentalController");

const Router = express.Router();

Router.post("/:customer/:movie", createRental);
Router.get("/", getRental);

module.exports = Router;
