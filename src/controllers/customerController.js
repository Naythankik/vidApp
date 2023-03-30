const { CustomerError } = require("../errors");
const validateCustomer = require("../middlewares/customerMiddleware");
const Customer = require("../models/customerModel");

const createCustomer = async (req, res) => {
  const { error, value } = validateCustomer(req.body);

  if (error) res.send(error.details[0].message);

  try {
    await Customer.create(value);
    res.send({ message: "User is created successfully" });
  } catch (error) {
    throw new Error(error);
  }
  return;
};

const getCustomers = async (req, res) => {
  try {
    const allCustomer = await Customer.find().sort("name");
    res.send({ customer: allCustomer });
  } catch (error) {
    throw new Error(error);
  }
};

const getACustomer = async (req, res) => {
  const { id } = req.params;

  try {
    const customer = await Customer.findById(id).select(["-_id"]);
    res.send(customer);
  } catch (error) {
    throw new Error(error);
  }
};

const updateACustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { value } = validateCustomer(req.body);

    const findCustomer = await Customer.findByIdAndUpdate(id, { $set: value });
    res.send("Customer has been updated successfully!");
  } catch (error) {
    throw new Error(error);
  }
  return;
};

const deleteACustomer = async (req, res) => {
  const { id } = req.params;
  try {
    await Customer.findByIdAndDelete(id);
    res.send("Customer has been deleted succesfully");
  } catch (error) {
    throw new Error(error);
  }
  return;
};

module.exports = {
  createCustomer,
  getCustomers,
  getACustomer,
  updateACustomer,
  deleteACustomer,
};
