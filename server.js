var express = require("express");
var favicon = require("serve-favicon");

var app = express();
app.use(favicon(__dirname + "/public/images/favicon.ico"));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/css", express.static(__dirname + "/public/css"));
// app.use("/js", express.static(__dirname + "/public/js"));
app.use("/images", express.static(__dirname + "/public/images"));

app.get("/", function (req, res) {
  res.render("pages/index");
});
app.get("/candidate-profile", function (req, res) {
  res.render("pages/index");
});
var server = app.listen(5300, function () {
  var port = server.address().port;
  console.log("Server started at http://localhost:%s", port);
});
