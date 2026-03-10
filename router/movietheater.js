const { valid } = require('joi');
const { addMovieIntoTheater, updateMovieIntoTheater, deleteMovieIntoTheater } = require('../controller/movietheater');
const { auth } = require('../middleware/auth');
const validate = require('../middleware/validate');
const { addMovieIntoTheaterSchema, updateMovieIntoTheaterScehma, deleteMovieIntoTheaterSchema } = require('../validate/movietheater');

const Router=require('express').Router()
Router.post('/add',validate(addMovieIntoTheaterSchema,"body"),auth,addMovieIntoTheater);
Router.put('/update',validate(updateMovieIntoTheaterScehma ,"body"),auth,updateMovieIntoTheater)
Router.delete('/delete',validate(deleteMovieIntoTheaterSchema ,"body"),auth,deleteMovieIntoTheater)


module.exports=Router;