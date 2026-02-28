const { createMovie, deleteMovie, updateMovie, getMovie, getallMovie } = require('../controller/movieConroller');
const { auth } = require('../middleware/auth');

const router=require('express').Router()


router.post('/create-movie',auth,createMovie)
router.delete('/delete-movie/:mid',auth,deleteMovie)
router.put('/update-movie/:mid',auth,updateMovie)
router.get('/get-movie/:mid',getMovie)
router.get('/getall-movie',getallMovie)


module.exports=router;