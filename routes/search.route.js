const express = require("express");
const router = express.Router();

router.get("/search", (req, res) => {
  const id = req.query.id;
  const name = req.query.name;
  const location = req.query.location;
  res.send(`id is: ${id}, name is: ${name} and location is: ${location}`);
});

module.exports = router;
