const router = require("express").Router();
const projectRoutes = require("./projects");
const reviewRoutes = require("./reviews");
const userRoutes = require("./users");

// project routes
router.use("/project", projectRoutes);
router.use("/users", userRoutes);


module.exports = router;
