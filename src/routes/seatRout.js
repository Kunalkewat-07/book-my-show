const { createSeat, createScreen, deleteSeat } = require('../controller/seatController');
const { auth } = require('../middleware/auth');

const router=require('express').Router()

router.post('/create-seat/:screen_id',auth, createSeat)
router.delete('/delete-seat/:seat_id',auth,deleteSeat)

module.exports= router