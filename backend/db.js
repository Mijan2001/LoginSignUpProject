const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.db;

const databaseConnection = mongoose
  .connect(db)
  .then(() => {
    console.log("Mongodb is connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = databaseConnection;
