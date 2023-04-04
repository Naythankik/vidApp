const Rental = require("../models/rentalModel");
const Movie = require("../models/movieModel");
const rentalValidate = require("../middlewares/rentalMiddleware");
const customerModel = require("../models/customerModel");

const createRental = async (req, res) => {
  const { customer, movie } = req.params;
  const { error, value } = rentalValidate(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  try {
    const findCustomer = await customerModel.findById(customer);

    if (findCustomer) value.customer = findCustomer.id;

    const findMovie = await Movie.findById(movie);
    if (findMovie) value.movie = movie;

    //check if the movie has been rented before
    const rental = await Rental.findOne({ customer, movie });

    // if the rental exist, return an error
    if (rental) {
      res.status(400).send("Movie has been rented before");
      return;
    }
    const newRent = await Rental.create(value);

    if (newRent) {
      findMovie.numberInStock -= 1;
    }

    await findMovie.save();

    res.send("Rent successful");
  } catch (error) {
    throw new Error(error);
  }

  return;
};

const getRental = async (req, res) => {
  try {
    const rent = await Rental.find()
      .populate("customer")
      .populate({
        path: "movie",
        populate: { path: "genre" },
      });
    res.send(rent);
    return;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getRental,
  createRental,
};
