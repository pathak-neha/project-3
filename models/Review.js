<<<<<<< HEAD
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  rating: { type: Number, required: true },
  reviewer: { type: String, required: true },
  comment: String
  // date: { type: Date, default: Date.now }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
=======
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
  reviewer: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: "Project"
  }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
>>>>>>> 54e6bcfea9f2bcef74d9af3bdbd3b44f834491ac
