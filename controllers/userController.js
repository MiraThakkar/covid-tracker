const db = require("../models");
const bcrypt = require("bcryptjs");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        res.status(422).json(err)
      });
  },

  create: function(req, res) {
    const saltSync = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, saltSync);
    // console.log("Into cretaing user");
    // console.log("User entered pass");
    // console.log(req.body.password);
    // const saltSync = bcrypt.genSaltSync();
    //const hash = bcrypt.hashSync(req.body.password, saltSync);
    console.log(req)
    console.log("encrypted pass");
    console.log(hash);
    db.User
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash
        })
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err)
        res.status(422).json(err)
      });
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
