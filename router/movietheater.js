const { valid } = require('joi');
const { addMovieIntoTheater, updateMovieIntoTheater, deleteMovieIntoTheater } = require('../controller/movietheater');
const { auth } = require('../middleware/auth');
const validate = require('../middleware/validate');
const { addMovieIntoTheaterSchema } = require('../validate/movietheater');

const Router=require('express').Router()
Router.post('/add',validate(addMovieIntoTheaterSchema,"body"),auth,addMovieIntoTheater);
Router.put('/update',validate(),auth,updateMovieIntoTheater)
Router.delete('/delete',auth,deleteMovieIntoTheater)


module.exports=Router;