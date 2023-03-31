const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = connection;
