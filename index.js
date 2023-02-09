const express = require("express");
const app = express();
const port = 9000;

// set view engine
app.set("view engine", "ejs");

app.use("/public", express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  console.log("Time:", Date.now());
  next();
});
// home
app.get("/", (request, response) => response.render("index"));

// game
app.get("/game", (request, response) => response.render("game"));

// ini error
app.get("/error", (req, res) => {
  iniError;
});

// kalau misal endpoint gak ada
app.use(function (req, res) {
  res.status(404);
  res.send({
    status: "page gak ada bro!!",
  });
});

// error handling, kalau dari apps ada error
app.use(function (err, req, res, next) {
  console.log("ada error");
  res.status(500).send({
    status: "fail",
    error: err.message,
  });
});

//port
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);