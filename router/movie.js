const { createMovie, deleteMovie, updateMovie, getMovie, getallMovie } = require('../controller/movie');
const { auth } = require('../middleware/auth');

const Router=require('express').Router()


Router.post('/create-movie',auth,createMovie)
Router.delete('/delete-movie/:mid',auth,deleteMovie)
Router.put('/update-movie/:mid',auth,updateMovie)
Router.get('/get-movie/:mid',getMovie)
Router.get('/getall-movie',getallMovie)


module.exports=Router;