const router = require("express").Router();
const projectRoutes = require("./projects");
const reviewRoutes = require("./reviews");
const userRoutes = require("./users");

// Book routes
router.use("/project", projectRoutes);

module.exports = router;
