var express = require('express');
var router = express.Router();

let index = require('../controllers/homePage')

/* GET home page. */
router.get('/', index.homePage);

module.exports = router;
