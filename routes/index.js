const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
// const appRoutes = require("routes.js")

// API Routes
router.use("/api", apiRoutes);
// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

// router.use("/",appRoutes);

module.exports = router;
