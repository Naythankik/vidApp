const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const connection = require("./config/dbConnection");

const PORT = process.env.PORT || 3000;
const {
  genreRoutes,
  customerRoutes,
  movieRoutes,
  rentalRouter,
} = require("./routes");

const app = express();
connection();

//Default middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//The routes list
app.use("/api/customer", customerRoutes);
app.use("/api/genre", genreRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/rentals", rentalRouter);

// index endpoint
app.get(["/"], (req, res) => {
  res.send("Welcome to VidApp");
});

app.listen(PORT, () => console.log(`PORT is running on ${PORT}`));
