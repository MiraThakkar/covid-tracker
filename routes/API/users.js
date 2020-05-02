const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
console.log("Into users route")
router.route("/submit")
  .post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .put(userController.update);

module.exports = router;