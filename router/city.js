const { add_City, getAll_City } = require('../controller/city');
const { auth } = require('../middleware/auth');
const validate = require('../middleware/validate');
const { addCitySchema } = require('../validate/city');

const router = require('express').Router();

router.post('/add-city',validate(addCitySchema,"body"),auth,add_City)

router.get('/getAll-city',getAll_City)

module.exports = router;