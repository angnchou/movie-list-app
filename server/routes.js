const controller = require("./controller.js");
const router = require("express").Router();

router.get("/api/movies", controller.movies.get);

module.exports = router;
