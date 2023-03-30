const { default: mongoose } = require("mongoose");

const Customer = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },

  isGold: {
    type: Boolean,
    default: false,
  },

  phone: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model("customer", Customer);
