const router = require('express').Router();
const {auth:userAuth} = require('../middleware/auth');
const theaterController = require('../controller/theater')
const screenrout=require('./screen')
const movierout=require('./movietheater')
router.post('/create',userAuth,theaterController.createTheater);

router.put('/update/:theater_id',userAuth,theaterController.updateTheater);

router.delete('/delete/:theater_id',userAuth,theaterController.deleteTheater);

router.get('/get-theater/:theater_id',userAuth,theaterController.getTheater);

router.get('/get-all-theaters',userAuth,theaterController.getAllTheaters);



router.use('/screen',screenrout);
router.use('/movie',movierout)


module.exports = router;