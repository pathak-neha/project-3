const router = require("express").Router();
const userController = require("../../controllers/userController");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'imgs/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({
  storage: storage,
})


// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(
    upload.single("imageUrl"),
    userController.create
  );

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
