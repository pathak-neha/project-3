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
