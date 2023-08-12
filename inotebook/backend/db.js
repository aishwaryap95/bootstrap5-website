const mongoose = require("mongoose");

function connectToMongo() {
  mongoose
    .connect("mongodb://localhost:27017/inotebook", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
}

module.exports = connectToMongo;
