const { createMovie, deleteMovie, updateMovie, getMovie, getallMovie } = require('../controller/movie');
const { auth } = require('../middleware/auth');

const Router=require('express').Router()
const validate  = require('../middleware/validate');
const { createMovieSchema, movieIdParamSchema, updateMovieSchema } = require('../validate/movie');

Router.post('/create-movie',validate(createMovieSchema,"body"),auth,createMovie)
Router.delete('/delete-movie/:mid',validate(movieIdParamSchema, "params"),auth,deleteMovie)
Router.put('/update-movie/:mid',validate(movieIdParamSchema, "params"),validate(updateMovieSchema,"body"),auth,updateMovie)
Router.get('/get-movie/:mid',validate(movieIdParamSchema,"params"),getMovie)
Router.get('/getall-movie',getallMovie)


module.exports=Router;