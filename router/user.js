const { bookingAndpayment, cancelBooking } = require('../controller/booking');
const { signup, login, getUser } = require('../controller/user');
const { auth } = require('../middleware/auth');
const feedbackrout = require('./feedbackrout')
const adminrout = require('./admin')
const Router=require('express').Router()
const validate=require('../middleware/validate');
const { signupSchema, loginSchema } = require('../validate/user');
const { bookingAndPaymentSchema, bookingIdParamsSchema } = require('../validate/booking');

Router.post('/signup',validate(signupSchema,"body"),signup);
Router.post('/login',validate(loginSchema,'body'),login)
Router.get('/getUser',auth,getUser)
Router.post('/book',validate(bookingAndPaymentSchema,"body"),auth,bookingAndpayment)
Router.post('/cencalBooking/:booking_id',validate(bookingIdParamsSchema,"params"),auth,cancelBooking)

Router.use('/feedback',feedbackrout)
Router.use('/admin',adminrout)
module.exports=Router;