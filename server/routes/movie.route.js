const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie.controller");

router.post("/", movieController.createmovie);
router.get("/", movieController.Getmovies);
router.put("/:id", movieController.updatemovie);
router.delete("/:id", movieController.deletemovie);

module.exports = router;
