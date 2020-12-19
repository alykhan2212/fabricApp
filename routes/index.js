var express = require('express');
var router = express.Router();

let user = require('../controllers/userController');
let adminController = require('../controllers/adminController');

/* AUTH Middleware. */
let {isLoggedOut , isLoggedIn , userRole} = require('../authentication/isAuthorized');

/* Routes to userController. */
router.get('/', isLoggedIn , user.homePage);
router.get('/login', isLoggedOut, user.show_login);
router.get('/signup', isLoggedOut, user.show_signup);
router.post('/login', user.login);
router.post('/signup', user.signup);
router.post('/logout', user.logout);
router.get('/logout', user.logout);

/* Routes to adminController. */
router.get('/admin', isLoggedIn, userRole, adminController.userDetails);



module.exports = router;
