const { createScreen, updateScreen, deleteScreen } = require('../controller/screen');
const { auth } = require('../middleware/auth');

const Router=require('express').Router();

Router.post('/create-screen/:Tid',auth,createScreen)
Router.put('/update-screen/:sid',auth,updateScreen)
Router.delete('/delete-screen/:sid',auth,deleteScreen)


module.exports=Router;