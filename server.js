const express = require("express");
//const logger = require("morgan");
var session = require("express-session");
const mongoose = require("mongoose");

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

<<<<<<< HEAD
// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trackerDB");
mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_2jh5m5w6:6nr8e8jg9gam3map9ojv5bj6nm@ds141960.mlab.com:41960/heroku_2jh5m5w6");
=======
// // Connect to the Mongo DB some
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trackerDB");
//mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_px71prjl:blasT123!@ds133428.mlab.com:33428/heroku_px71prjl");

>>>>>>> fb9a5c456fb0e4047c9f464d3244da590eec42dc

// Start the API server
app.listen(PORT, () => {
  //console.log(`App running on port ${PORT}!`);
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

