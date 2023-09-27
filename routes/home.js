const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Expressssss Testing",
    message: "The app is working properlyyyy!",
  });
});

module.exports = router;