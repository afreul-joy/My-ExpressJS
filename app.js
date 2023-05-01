const express = require("express");
const app = express();
const userRouter = require("./routes/user.route");

app.use(userRouter);  // user Routes using 

//-------------ROOT PAGE ------------
app.get("/", (req, res) => {
  res.send("Server returned");
});

//-------------handle bad url request------------
app.use((req, res) => {
  res.send("<h1>Bad Request - 404 - PAGE NOT FOUND </h1>");
});

module.exports = app;
