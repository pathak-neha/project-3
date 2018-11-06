<<<<<<< HEAD
const router = require("express").Router();
const projectController = require("../../controllers/projectController");

// Matches with "/api/project"
router.route("/")
.get(projectController.findAll)
.post(projectController.create)
 
// Matches with "/api/project/:id"
router.route("/:id")
.get(projectController.findOne)
.delete(projectController.remove)
.put(projectController.update)
  

module.exports = router;
=======
const router = require("express").Router();
const projectController = require("../../controllers/projectController");

// Matches with "/api/project"
router.route("/")
    .get(projectController.findAll)
    .post(projectController.create)
 
// Matches with "/api/project/:id"
router.route("/:id")
    .get(projectController.findById)
    .delete(projectController.remove)
    .put(projectController.update)

module.exports = router;
>>>>>>> 54e6bcfea9f2bcef74d9af3bdbd3b44f834491ac
