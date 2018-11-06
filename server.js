const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const path=require("path")
const bodyParser = require("body-parser")
const PORT =3001;
// const reviewController = require("../../controllers/reviewController");


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rateMyProject", { useNewUrlParser: true });
// console.log(reviewController.findAll())
app.use(routes);
app.use(bodyParser.json())

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});


app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
