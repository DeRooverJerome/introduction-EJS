const express = require("express");
const port = 3000;
const app = express();
const path = require("path");
const dotenv = require("dotenv").config();
const getTime = require("./time");

app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const timeNow = getTime();
  res.render("index", { timeNow });
});

app.listen(port, () => console.log("Server launch at port " + port));
