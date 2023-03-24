const express = require("express");
const {
  createCustomer,
  getCustomers,
  getACustomer,
} = require("../src/controllers/customerController");
const Router = express.Router();

Router.route("/").post(createCustomer).get(getCustomers);
Router.route("/:id").get(getACustomer);

module.exports = Router;
