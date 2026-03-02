const router = require("express").Router();

const {
  addMovieIntoTheater,
  getMoviesOfTheater,
  updateMovieIntoTheater,
  deleteMovieIntoTheater,
} = require("../controller/MTcontroller");
const { auth } = require("../middleware/auth");

router.post("/create", auth, addMovieIntoTheater);

router.get("/get-movies/:movie_id/:theater_id", auth, getMoviesOfTheater);

router.put("/update/:MT_id", auth, updateMovieIntoTheater);

router.delete("/delete/:MT_id", auth, deleteMovieIntoTheater);

module.exports = router;
