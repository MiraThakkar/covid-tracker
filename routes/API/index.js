const router = require("express").Router();
const userRoutes = require("./users");

// Users routes
router.use("/users", bookRoutes);

module.exports = router;