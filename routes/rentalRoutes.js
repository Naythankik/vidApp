const express = require("express");
const {
  createRental,
  getRentals,
  getARental,
} = require("../src/controllers/rentalController");

const Router = express.Router();

Router.get("/", getRentals);
Router.get("/:id", getARental);
Router.post("/:customer/:movie", createRental);

module.exports = Router;
