let models = require("../models");
let bcrypt = require("bcrypt");
const passport = require('passport');
const myPassport = require('../passportSetup')(passport);
let flash = require('connect-flash');
const {isEmpty} = require('lodash');

const {validateUser} = require('../validators/signup')

exports.homePage = function(req, res, next) { 
	res.render('pages/index', { user: req.user });
}

exports.show_login = function(req, res, next) {
	res.render('pages/login', { formData: {} , message: req.flash('message')  });  
}

exports.show_signup = function(req, res, next) {
    res.render('pages/signup', { formData: {} , errors: {} , message: req.flash('success')});
}

const rerender_signup = function(errors, req, res, next) {
    res.render('pages/signup', { formData: req.body , errors: errors , message: req.flash('success') });
}

const generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

exports.signup = function(req, res, next) {
	
   	let errors = {};
    return validateUser(errors,req).then(errors=>{
		if(!isEmpty(errors)){
			rerender_signup(errors,req,res,next);

		}else{
			let newUser;
			if(req.body.role === 'applicant'){

				newUser = models.User.build({
					username: req.body.username,
					password: generateHash(req.body.password),
					email: req.body.email,
					role: req.body.role,
					is_active: true
				});
			
			}else{
				newUser = models.User.build({
					username: req.body.username,
					password: generateHash(req.body.password),
					email: req.body.email,
					role: req.body.role,
					is_active: false
				});
			}
				
			return newUser.save().then(result => {
				passport.authenticate('local', {
					successRedirect: "/",
					failureRedirect: "/signup",
					failureFlash: true,
					successFlash: req.flash('success', 'Successfully created. wait for your approval ')
					})(req, res, next);
				});	
		
			}
	})			
}

exports.login = function(req, res, next) { 
	passport.authenticate('local', {
		successRedirect: "/",
		failureRedirect: "/login",
		failureFlash: true
	})(req, res, next);
}

exports.logout = function(req, res, next) { 
	req.logout();
	req.session.destroy();
	res.redirect('/login');
}
