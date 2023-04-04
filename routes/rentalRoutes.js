const express = require("express");
const {
  createRental,
  getRental,
} = require("../src/controllers/rentalController");

const Router = express.Router();

Router.get("/", getRental);
Router.post("/:customer/:movie", createRental);

module.exports = Router;
