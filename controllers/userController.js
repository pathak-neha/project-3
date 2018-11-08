const db = require("../models");
const multer = require('multer');


// Defining methods for the UsersController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(db => res.json(db))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .populate("projects")
      .then(db => res.json(db))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res,next) {
    
      console.log("inside create")
      console.log(req.file)
      const newUser = new db.User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email,
        cell: req.body.cell,
        imageURL: req.file.path,
        // dateCreated: { type: Date, default: Date.now },
      });
      console.log(`creating document for: \n ${JSON.stringify(req.body)}`)
      db.User
        .create(newUser)
        .then(function (req, data) { res.send(data) })
        .catch(err => res.status(422).json(err));
    
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(db => res.json(db))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(db => db.remove())
      .then(db => res.json(db))
      .catch(err => res.status(422).json(err));
  },
};
