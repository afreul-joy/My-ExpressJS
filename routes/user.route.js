const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("I am login route");
});

//---------------Response HTML FILES--------------------------------
router.get("/register", (req, res) => {
  res.send("i am register route");
});
//---------------Response JSON FILES--------------------------------
router.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
  ];
  res.json(users);
});

module.exports = router;
