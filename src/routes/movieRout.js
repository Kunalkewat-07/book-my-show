const { createMovie, deleteMovie, updateMovie, getMovie, getallMovie } = require('../controller/movieConroller');
const { auth } = require('../middleware/auth');

const router=require('express').Router()


router.post('/create-movie',auth,createMovie)
router.delete('/delete-movie',auth,deleteMovie)
router.put('/update-movie',auth,updateMovie)
router.get('/get-movie/:movie_id',getMovie)
router.get('/getall-movie',getallMovie)


module.exports=router;