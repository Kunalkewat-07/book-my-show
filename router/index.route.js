
const router = require('express').Router()

const userRout=require('../router/user')
const movieRout=require('../router/movie')
const theaterRout=require('../router/theater');
const cityRout=require('../router/city');
const seatRout=require('../router/saet');


router.use('/auth',userRout)
router.use('/theater',theaterRout)
router.use('/movie',movieRout)
router.use('/city',cityRout)
router.use('/seat',seatRout)


module.exports  = router

