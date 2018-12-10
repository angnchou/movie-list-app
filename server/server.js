var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");

var router = require("./routes.js");

var app = express();
module.exports.app = app;

const port = 3000;
app.set("port", port);

app.use("/api/movies");

app.listen(app.get("port"));
console.log("Listening on ", port);
