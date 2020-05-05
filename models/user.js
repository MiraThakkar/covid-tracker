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

// User.prototype.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.password);
// };
// // Hooks are automatic methods that run during various phases of the User Model lifecycle
// // In this case, before a User is created, we will automatically hash their password
// User.addHook("beforeCreate", function(user) {
//   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
// });

module.exports = User;


