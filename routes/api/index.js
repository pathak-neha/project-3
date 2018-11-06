<<<<<<< HEAD
const router = require("express").Router();
const projectRoutes = require("./projects");
const reviewRoutes = require("./reviews");
const userRoutes = require("./users");

// Book routes
router.use("/project", projectRoutes);

module.exports = router;
=======
const router = require("express").Router();
const projectRoutes = require("./projects");
const reviewRoutes = require("./reviews");
const userRoutes = require("./users");

router.use("/projects", projectRoutes);
router.use("/users", userRoutes);
router.use("/reviews", reviewRoutes);

module.exports = router;
>>>>>>> 54e6bcfea9f2bcef74d9af3bdbd3b44f834491ac
