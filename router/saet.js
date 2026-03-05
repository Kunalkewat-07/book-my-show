const { createSeat, deleteSeat } = require('../controller/seat');
const { auth } = require('../middleware/auth');

const Router=require('express').Router();


Router.post('/create-seat/:screen_id',auth,createSeat)
Router.delete('/delete-seat',auth,deleteSeat)



module.exports=Router;