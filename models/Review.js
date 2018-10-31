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
