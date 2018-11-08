// const path= require("path");

// const multer= require("multer");
// let storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'imgs/')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now()  + path.extname(file.originalname))
//     }
//   })

// const upload= multer({storage: storage}).single("image");

// module.exports= upload;

// this is the config file for multer