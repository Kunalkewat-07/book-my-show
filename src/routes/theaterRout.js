const router = require("express").Router();
const {
  getTheater,
  deleteTheater,
  updateTheater,
  createTheater,
  getAllTheaters,
} = require("../controller/TheaterController");
const { auth } = require("../middleware/auth");

router.post("/create", auth, createTheater);

router.put("/update", auth, updateTheater);

router.delete("/delete", auth, deleteTheater);

router.get("/get-theater/:theater_id", auth, getTheater);

router.get("/get-all-theaters", auth, getAllTheaters);

module.exports = router;
