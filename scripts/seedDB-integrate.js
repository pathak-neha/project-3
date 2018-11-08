const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/rateMyProject"
  );

db.User.findOne({firstName: "Adam"})
.then(function(dbUser) {
  // console.log("dbUser: " + JSON.stringify(dbUser));
  db.Project.findOne({projectName: "Virtual Computer"})
  .then(function(dbProject) {
    // console.log("dbProject: " + JSON.stringify(dbProject));
    db.User.findOneAndUpdate({_id: dbUser._id}, {$push: {projects: dbProject._id}}, function(error, User) {
      // console.log("error: " + error);
      db.Project.findOneAndUpdate({_id: dbProject._id}, {$set: {creator: dbUser._id}}, function(error, Project) {
      // console.log("error: " + error);
      // process.exit(0);
    });
    });
  });
})
.catch(function(error) {
  console.log("error updating user-project relationship: " + error);
  process.exit(1);
});

db.User.findOne({firstName: "Eve"})
.then(function(dbUser) {
  // console.log("dbUser: " + JSON.stringify(dbUser));
  db.Project.findOne({projectName: "Fake News Detector"})
  .then(function(dbProject) {
    // console.log("dbProject: " + JSON.stringify(dbProject));
    db.User.findOneAndUpdate({_id: dbUser._id}, {$push: {projects: dbProject._id}}, function(error, User) {
      db.Project.findOneAndUpdate({_id: dbProject._id}, {$set: {creator: dbUser._id}}, function(error, Project) {
    });
    });
  });
})
.catch(function(error) {
  console.log("error updating user-project relationship: " + error);
  process.exit(1);
});

db.User.findOne({firstName: "Eve"})
.then(function(dbUser) {
  // console.log("dbUser: " + JSON.stringify(dbUser));
  db.Project.findOne({projectName: "Virtual Computer"})
  .then(function(dbProject) {
    db.Review.findOne({comment: "It's meh!"})
    .then(function(dbReview) {
      db.Review.findOneAndUpdate({_id: dbReview._id}, {$set: {reviewer: dbUser._id, project: dbProject._id}}, function(error, Review) {
        db.Project.findOneAndUpdate({_id: dbProject._id}, {$push: {reviews: dbReview._id}}, function(error, Project) {
      });
      });
    });
  });
})
.catch(function(error) {
  console.log("error updating user-project relationship: " + error);
  process.exit(1);
});

db.User.findOne({firstName: "Adam"})
.then(function(dbUser) {
  // console.log("dbUser: " + JSON.stringify(dbUser));
  db.Project.findOne({projectName: "Fake News Detector"})
  .then(function(dbProject) {
    db.Review.findOne({comment: "It's freaking awesome!"})
    .then(function(dbReview) {
      db.Review.findOneAndUpdate({_id: dbReview._id}, {$set: {reviewer: dbUser._id, project: dbProject._id}}, function(error, Review) {
        db.Project.findOneAndUpdate({_id: dbProject._id}, {$push: {reviews: dbReview._id}}, function(error, Project) {
          process.exit(0);
      });
      });
    });
  });
})
.catch(function(error) {
  console.log("error updating user-project relationship: " + error);
  process.exit(1);
});
