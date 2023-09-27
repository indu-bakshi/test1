var express = require("express");
var favicon = require("serve-favicon");
var fs = require("fs");
var path = require("path");

var app = express();
app.use(favicon(__dirname + "/public/images/favicon.ico"));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/images", express.static(__dirname + "/public/images"));

const port = process.env.PORT || 5300;

app.get("/", function (req, res) {
  res.send("hello world");
})
app.listen(port, () => console.log(`Listening on port ${port}`));
