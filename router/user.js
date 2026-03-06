const { bookingAndpayment, cancelBooking } = require('../controller/booking');
const { signup, login, getUser } = require('../controller/user');
const { auth } = require('../middleware/auth');
const feedbackrout = require('./feedbackrout')
const Router=require('express').Router()


Router.post('/signup',signup);
Router.post('/login',login)
Router.get('/getUser',auth,getUser)
Router.post('/book',auth,bookingAndpayment)
Router.post('/cencalBooking/:booking_id',auth,cancelBooking)

Router.use('/feedback',feedbackrout)
module.exports=Router;