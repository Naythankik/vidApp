const { default: mongoose } = require("mongoose");

const Movie = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  genre: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "genre",
    },
  ],
  numberInStock: {
    type: Number,
    require: true,
  },
  dailyRentalRate: Number,
});

module.exports = mongoose.model("movie", Movie);
