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
  var fileName = undefined;
  if (req.query.profileBranch) {
    fileName = path.join(
      __dirname,
      `/public/jsonData/${req.query.profileBranch}.json`
    );
    if (!fs.existsSync(fileName)) {
      fileName = path.join(__dirname, "/public/jsonData/itComp.json");
    }
  } else {
    fileName = path.join(__dirname, "/public/jsonData/itComp.json");
  }

  fs.readFile(fileName, (err, data) => {
    var jsonData = data;
    var jsonParsed = JSON.parse(jsonData);
    var userData = undefined;
    var company = undefined;
    var tempid = undefined;
    var cohort = undefined;

    if (req.query.userData) {
      userData = req.query.userData;
      company = req.query.company;
      tempid = req.query.tempid;
      cohort = req.query.cohort;
    } else {
      userData = 1;
      company = 1;
      tempid = -1;
      cohort = -1;
    }
    res.render("pages/index", {
      userData: userData,
      company: company,
      tempid: tempid,
      cohort: cohort,
      profileData: jsonParsed,
    });
  });
});
app.get("/candidate-profile", function (req, res) {
  var userData = undefined;
  var company = undefined;
  var tempid = undefined;
  var cohort = undefined;

  if (req.query.userData) {
    userData = req.query.userData;
    company = req.query.company;
    tempid = req.query.tempid;
    cohort = req.query.cohort;
  } else {
    userData = 1;
    company = 1;
    tempid = -1;
    cohort = -1;
  }
  res.render("pages/index", {
    userData: userData,
    company: company,
    tempid: tempid,
    cohort: cohort,
  });
});
app.listen(port, () => console.log(`Listening on port ${port}`));
