<<<<<<< HEAD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  cell: String,
  imageURL: String,
  projects: String,
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
=======
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String},
  lastName: { type: String},
  username: { type: String, required: true},
  password: { type: String, required: true},
  email: { type: String, required: true},
  cell: String,
  imageURL: String,
  // dateCreated: { type: Date, default: Date.now },
  projects: [{ 
    type: Schema.Types.ObjectId,
    ref: "Project"
  }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
>>>>>>> 54e6bcfea9f2bcef74d9af3bdbd3b44f834491ac
