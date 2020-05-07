const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  lastName: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 8, "Password should be longer."]
  },
  
});

const User = mongoose.model("User", UserSchema);

module.exports = User;


