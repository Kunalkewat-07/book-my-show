const {
  createScreen,
  updateScreen,
  deleteScreen,
} = require("../controller/screenController");
const { auth } = require("../middleware/auth");

const router = require("express").Router();

router.post("/create-screen/:Tid", auth, createScreen);
router.put("/update-screen/:sid", auth, updateScreen);
router.delete("/dlete-screen.:sid", auth, deleteScreen);

module.exports = router;