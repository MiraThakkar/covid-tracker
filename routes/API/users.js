const router = require("express").Router();
const passport = require("../../controllers/passport");
const userController = require("../../controllers/userController");
//router.use(passport.initialize())

// Matches with "/api/users/login"
router.route("/login").post(passport.authenticate("local"), function(req, res) {
  console.log("Hitting login route")
  // console.log(res)
  res.json()
});


console.log("Into users route")
router.route("/submit")
  .post(userController.create);

//router.route("/login'").post(userController)
// Matches with "/api/users/:id"
router
  .route("/:id")
  .put(userController.update);
  

  // Matches with "/api/users/user_data"
router
  .route("/user_data")
  .get(userController.findOne)
module.exports = router;