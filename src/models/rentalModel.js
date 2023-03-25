const { default: mongoose } = require("mongoose");

const Rental = mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "movie",
  },
  dateOut: {
    type: Date,
    default: Date.now(),
  },
  dateReturned: {
    type: Date,
  },
  rentalFee: {
    type: Number,
  },
});

module.exports = mongoose.model("rental", Rental);
