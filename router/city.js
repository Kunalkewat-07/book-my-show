const { add_City, getAll_City } = require('../controller/city');
const { auth } = require('../middleware/auth');

const router = require('express').Router();

router.post('/add-city',auth,add_City)

router.get('/getAll-city',getAll_City)

module.exports = router;