const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect("mongodb://localhost:27017/blogApi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use Blog routes middleware
app.use(blogRoutes);

// port to run our server
app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
