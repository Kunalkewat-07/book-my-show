const { createSeat, deleteSeat } = require('../controller/seat');
const { auth } = require('../middleware/auth');

const Router=require('express').Router();
const validate = require('../middleware/validate');
const { createSeatSchema, Seat_IdParamSchema, SIdParamSchema, } = require('../validate/seat');

Router.post('/create-seat/:screen_id',validate(SIdParamSchema,"params"),validate(createSeatSchema,"body"),auth,createSeat)
Router.delete('/delete-seat/:seat_id',validate(Seat_IdParamSchema,"params"),auth,deleteSeat)



module.exports=Router;