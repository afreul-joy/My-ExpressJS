const express = require("express");
const router = express.Router();

// al products
router.get("/products", (req, res) => {
  res.send(` all products are ready `);
});

// single products
router.get("/products/:id", (req, res) => {
  const id = req.params.id;
  res.send(`product id is: ${id}`);
});

module.exports = router;
