const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/rateMyProject"
);

const userSeed = [
  {
   firstName: "Adam",
   lastName: "A.",
   password: "adama",
   email: "adama@gmail.com",
   cell: "647 111 1111",
   imageUrl: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"
  },
  {
   firstName: "Eve",
   lastName: "E",
   password: "evee",
   email: "evee@gmail.com",
   cell: "647 222 2222",
   imageUrl: "https://www.w3schools.com/howto/img_avatar2.png"
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
