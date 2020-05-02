const router = require("express").Router();
const userRoutes = require("./users");

// Users routes
console.log("into users API index")
router.use("/users", userRoutes);

module.exports = router;