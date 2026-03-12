const { valid } = require('joi');
const { addMovieIntoTheater, updateMovieIntoTheater, deleteMovieIntoTheater, getMoviesOfTheater } = require('../controller/movietheater');
const { auth } = require('../middleware/auth');
const validate = require('../middleware/validate');
const { addMovieIntoTheaterSchema, updateMovieIntoTheaterScehma, deleteMovieIntoTheaterSchema } = require('../validate/movietheater');
const { movieIdParamSchema } = require('../validate/movie');

const Router=require('express').Router()
Router.post('/addShow',validate(addMovieIntoTheaterSchema,"body"),auth,addMovieIntoTheater);
Router.put('/updateShow/:MT_Id',validate(updateMovieIntoTheaterScehma ,"body"),auth,updateMovieIntoTheater)
Router.delete('/deleteShow/:MT_Id',validate(deleteMovieIntoTheaterSchema ,"body"),auth,deleteMovieIntoTheater)
Router.get('/getShow/:movie_id',getMoviesOfTheater)

module.exports=Router;