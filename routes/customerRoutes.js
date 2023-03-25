const express = require("express");
const {
  createCustomer,
  getCustomers,
  getACustomer,
  updateACustomer,
  deleteACustomer,
} = require("../src/controllers/customerController");
const Router = express.Router();

Router.route("/").post(createCustomer).get(getCustomers);
Router.route("/:id")
  .get(getACustomer)
  .put(updateACustomer)
  .delete(deleteACustomer);

module.exports = Router;
