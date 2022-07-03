const mongoose = require("mongoose");
var debug = require('debug')('travelApi:server');

mongoose
  .connect(process.env.MONGO_URI || "mongodb:///localhost:27017/travelApi")
  .then(
    () => {
      debug("Database connected ");
    },
    (err) => {
      debug("Error to connect to database %o", err);
    }
);