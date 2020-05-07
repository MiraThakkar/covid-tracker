const router = require("express").Router();
const passport = require("../../controllers/passport");
const userController = require("../../controllers/userController");


// Matches with "/api/users"
router.route.post("/login", passport.authenticate("local"), function(req, res) {
  res.json(req.user)});

console.log("Into users route")
router.route("/submit")
  .post(userController.create);

//router.route("/login'").post(userController)
// Matches with "/api/users/:id"
router
  .route("/:id")
  .put(userController.update);

module.exports = router;