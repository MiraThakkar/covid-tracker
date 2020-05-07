const router = require("express").Router();
const passport = require("../../controllers/passport");
const userController = require("../../controllers/userController");
//router.use(passport.initialize())

// Matches with "/api/users/login"
router.route("/login").post(passport.authenticate("local"), function(req, res) {
  console.log("Hiting login route")
  console.log(res)
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

module.exports = router;