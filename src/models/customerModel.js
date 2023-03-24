const { default: mongoose } = require("mongoose");

const Customer = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },

  isGold: Boolean,

  phone: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model("customer", Customer);
