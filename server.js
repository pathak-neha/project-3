const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes");
const app = express();
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3001;

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// !!! NOTE: for Postman requests, uncomment line 15, and comment out line 16 !!!
app.use(bodyParser.json());
// bodyParser.urlencoded({extended:true})

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/rateMyProject", { useNewUrlParser: true });
app.use(logger("dev"));
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});
// app.get("/",function(req,res) {
//   res.send('hi')
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
