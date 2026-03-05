const {auth:userAuth} = require('../middleware/auth');
const { createfeedBack, deletefeedBack, updatefeedBack } = require('../controller/feedbackcontroller');

const router = require('express').Router();

router.post('/add-feedback',userAuth,createfeedBack);
router.delete('/delete-feedback/:fid',userAuth,deletefeedBack);
router.put('/update-feedback/:fid',userAuth,updatefeedBack)


module.exports = router