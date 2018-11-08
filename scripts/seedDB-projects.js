const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/rateMyProject"
);

const projectSeed = [
  {
   projectName: "Virtual Computer",
   repoURL: "https://github.com/SelwynLeonard/Reproducible-Research-Project-1",
   appURL: "https://example.herokuapp.com/",
   imageURL: "https://cdn.pcsteps.com/wp-content/uploads/2015/09/What-is-a-Virtual-Machine-and-Why-Would-I-Need-One.png",
   description: "A virtual computer implementation using C",
   keywords: ["virtual", "programming"]
  },
  {
   projectName: "Fake News Detector",
   repoURL: "https://github.com/prezkemp1/ProgrammingAssignment2",
   appURL: "http://node-js-sample.herokuapp.com/",
   imageURL: "https://i2.wp.com/trendintech.com/wp-content/uploads/2017/01/161212_TECH_ThisIsFake.jpg.CROP_.promo-xlarge2.jpg?fit=1180%2C842",
   description: "A Nodejs fake news detector",
   keywords: ["artificial intelligence", "machine learning"]
  }
];

db.Project
  .remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
