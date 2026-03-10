const {auth:userAuth} = require('../middleware/auth');
const { createfeedBack, deletefeedBack, updatefeedBack } = require('../controller/feedbackcontroller');
const validate = require('../middleware/validate');
const { createFeedbackSchema, FeedbackIDParamsSchema, updateFeedbackSchema } = require('../validate/feedback');

const router = require('express').Router();
router.post('/add-feedback',validate(createFeedbackSchema,"body"),userAuth,createfeedBack);
router.delete('/delete-feedback/:fid',validate(FeedbackIDParamsSchema, "params"),userAuth,deletefeedBack);
router.put('/update-feedback/:fid',validate(FeedbackIDParamsSchema, "params"),validate(updateFeedbackSchema,"body"),userAuth,updatefeedBack)


module.exports = router