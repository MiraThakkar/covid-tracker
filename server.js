const express = require("express");
//const logger = require("morgan");
var session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3001;

const routes = require("./routes");
const passport = require("./controllers/passport");
//const User = require("./models/user.js");
const app = express();

//app.use(logger("dev"));//?

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trackerDB");
mongoose.connect(process.env.MONGODB_URI || "mongodb://healthadm:admin123@ds257097.mlab.com:57097/heroku_5rrr5219");

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, () => {
  //console.log(`App running on port ${PORT}!`);
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

