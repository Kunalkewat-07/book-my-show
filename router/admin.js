const {
  top_moives_reports,
  getMonthlyrevenue,
  getAlmostFullShows,
  getFrequentUsers,
  getTheaterRevenue,
  getSeatPreference,
  getTopRatedMovie,
  preBookingHours,
  getCancelledUsers,
  getCityWiseRevenue,
} = require("../controller/adminside");
const { auth } = require("../middleware/auth");
const { route } = require("./feedbackrout");

const router = require("express").Router();

router.get("/getTopMovies", auth, top_moives_reports);
router.get("/getMonthlyRevenue", auth, getMonthlyrevenue);
router.get("/getAlmostFullShows", auth, getAlmostFullShows);
router.get("/getFrequentUsers", auth, getFrequentUsers);
router.get("/getTheaterRevenue", auth, getTheaterRevenue);
router.get("/getSeatPreference", auth, getSeatPreference);
router.get("/getTopRatedMovies", auth, getTopRatedMovie);
router.get("/preBookingHours", auth, preBookingHours);
router.get("/getCancelledUsers", auth, getCancelledUsers);
router.get("/getCityWiseRevenue", auth, getCityWiseRevenue);

module.exports = router;
