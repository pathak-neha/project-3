const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectName:{type:String,required:true},
  repoURL: { type: String, required: true },
  appURL: { type: String, required: true },
  imageURL:{type:String},
  destription: { type: String},
  keywords:{type:Array},
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
