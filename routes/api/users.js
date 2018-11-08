const router = require("express").Router();
const userController = require("../../controllers/userController");
const multer = require('multer');
const upload = multer({ dest: 'imgs/' })


// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(
    upload.single("imageURL"),
    userController.create
);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
