const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

// for get from body data 
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/form", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

router.post("/form", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  res.send(`Name: ${name} Email: ${email}`);
});

module.exports = router;
