const { valid } = require('joi');
const { auth } = require('../middleware/auth');
const Router=require('express').Router();
const validate = require('../middleware/validate');
const { createScreenSchema, updateScreenSchema, screenIdParamSchema } = require('../validate/screen');
const { theaterIdParamSchema } = require('../validate/screen');
const { createScreen, updateScreen, deleteScreen } = require('../controller/screen');

Router.post('/create-screen/:Tid',validate(theaterIdParamSchema, "params"),validate(createScreenSchema, "body"),auth,createScreen)
Router.put('/update-screen/:sid',validate(screenIdParamSchema,"params"),validate(updateScreenSchema,"body"),auth,updateScreen)
Router.delete('/delete-screen/:sid',validate(screenIdParamSchema, "params"),auth,deleteScreen)


module.exports=Router;