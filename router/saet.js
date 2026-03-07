const { createSeat, deleteSeat } = require('../controller/seat');
const { auth } = require('../middleware/auth');

const Router=require('express').Router();
const validate = require('../middleware/validate');
const { screenIdParamSchema } = require('../validate/screen');
const { createSeatSchema, SeatIdParamSchema, deleteSeatschema } = require('../validate/seat');

Router.post('/create-seat/:screen_id',validate(screenIdParamSchema,"params"),validate(createSeatSchema,"body"),auth,createSeat)
Router.delete('/delete-seat/:seat_id',validate(SeatIdParamSchema,"params"),validate(deleteSeatschema,"body"),auth,deleteSeat)



module.exports=Router;