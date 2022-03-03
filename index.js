var express = require("express");
var favicon = require("serve-favicon");

var app = express();
app.use(favicon(__dirname + "/public/images/favicon.ico"));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/css", express.static(__dirname + "/public/css"));
// app.use("/js", express.static(__dirname + "/public/js"));
app.use("/images", express.static(__dirname + "/public/images"));

const port = process.env.PORT || 5300;

app.get("/", function (req, res) {
  var userData = undefined;
  if (req.query.userData) {
    userData = req.query.userData;
  } else {
    userData = 1;
  }
  res.render("pages/index", {
    userData: userData,
  });
});
app.get("/candidate-profile", function (req, res) {
  var userData = undefined;
  if (req.query.userData) {
    userData = req.query.userData;
  } else {
    userData = 1;
  }
  res.render("pages/index", {
    userData: userData,
  });
});
app.listen(port, () => console.log(`Listening on port ${port}`));
