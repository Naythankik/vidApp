const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const connection = require("./config/dbConnection");

const PORT = process.env.PORT || 3000;

const router = require("./routes/routes");
const app = express();
connection();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/vidapp", router);

app.get(["/"], (req, res) => {
  res.send("Welcome to VidApp");
});

app.listen(PORT, () => console.log(`PORT is running on ${PORT}`));
