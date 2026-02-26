const { signup } = require('../controller/authController');

const router = require('express').Router();

router.get('/signup', signup)


module.exports = router