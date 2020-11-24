var express = require('express');
var router = express.Router();

let user = require('../controllers/userController');
let home = require('../controllers/homePage')

let {isLoggedOut , isLoggedin} = require('../authentication/isAuthorized')
/* GET users listing. */

router.get('/', isLoggedOut , home.homePage);

router.get('/login', isLoggedin, user.show_login);
router.get('/signup', isLoggedin, user.show_signup);
router.post('/login', user.login);
router.post('/signup', user.signup);
router.post('/logout', user.logout);
router.get('/logout', user.logout);

module.exports = router;
