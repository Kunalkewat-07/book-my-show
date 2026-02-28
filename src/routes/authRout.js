const { signup, login, getUser } = require('../controller/UserController');
const { auth } = require('../middleware/auth');

const router = require('express').Router();

router.post('/signup', signup)

router.post('/login',login)

router.get('/getUser',auth,getUser)

module.exports = router