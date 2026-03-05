const { bookingAndpayment, cancelBooking } = require('../controller/booking');
const { signup, login, getUser } = require('../controller/user');
const { auth } = require('../middleware/auth');

const Router=require('express').Router()


Router.post('/signup',signup);
Router.post('/login',login)
Router.get('/getUser',auth,getUser)
Router.post('/book',auth,bookingAndpayment)
Router.post('/cancelBooking/:booking_id',auth,cancelBooking)
module.exports=Router;