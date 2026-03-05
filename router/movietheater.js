const { addMovieIntoTheater, updateMovieIntoTheater, deleteMovieIntoTheater } = require('../controller/movietheater');
const { auth } = require('../middleware/auth');

const Router=require('express').Router()

Router.post('/add',auth,addMovieIntoTheater);
Router.put('/update',auth,updateMovieIntoTheater)
Router.delete('/delete',auth,deleteMovieIntoTheater)


module.exports=Router;