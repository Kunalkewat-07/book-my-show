const router = require('express').Router();
const {auth:userAuth} = require('../middleware/auth');
const theaterController = require('../controller/theater')
const screenrout=require('./screen')
const movierout=require('./movietheater')
const validate = require('../middleware/validate');
const { createTheaterSchema, updateTheaterSchema, theaterIdParamSchema } = require('../validate/theater');
router.post('/create-theater',validate(createTheaterSchema,"body"),userAuth,theaterController.createTheater);

router.put('/update/:theater_id',validate(theaterIdParamSchema, "params"),validate(updateTheaterSchema,"body"),userAuth,theaterController.updateTheater);

router.delete('/delete/:theater_id',validate(theaterIdParamSchema,"params"),userAuth,theaterController.deleteTheater);

router.get('/get-theater/:theater_id',validate(theaterIdParamSchema,"params"),theaterController.getTheater);

router.get('/get-all-theaters',theaterController.getAllTheaters);



router.use('/screen',screenrout);
router.use('/movie',movierout)


module.exports = router;