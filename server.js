const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const routes = require("./routes");
//const User = require("./models/user.js");
const app = express();

app.use(logger("dev"));//?

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
// // Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, () => {
  //console.log(`App running on port ${PORT}!`);
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

