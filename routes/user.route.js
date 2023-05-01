const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
    res.send("I am login route");
  });
router.get("/register", (req, res) => {
    res.send("I am register route");
  });


  module.exports = router; 