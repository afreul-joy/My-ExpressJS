const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server returned");
});
//-------- only get request can test on browser------
app.get("/about", (req, res) => {
  res.send("I am about route");
});
//-------- Others  api request testing need to "POSTMAN OR THUNDER CLIENT"----
app.post("/", (req, res) => {
    res.send("POST request succeeded");
  });
app.put("/", (req, res) => {
    res.send("Put request succeeded");
  });
app.delete("/", (req, res) => {
    res.send("Delete request succeeded");
  });

module.exports = app; 
