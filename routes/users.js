var express = require('express');
var router = express.Router();

let user = require('../controllers/userController')
/* GET users listing. */

router.get('/login', user.show_login);
router.get('/signup', user.show_signup);
// router.post('/login', user.login);
// router.post('/signup', user.signup);
// router.post('/logout', user.logout);
// router.get('/logout', user.logout);

module.exports = router;
