let models = require("../models");

exports.userDetails = function(req, res, next) {
	
	models.User.findAll({ raw: true }).then(userObj => {
		res.render('pages/manageusers',{
				user: req.user,
				userObjs:userObj
		});
		
	})
}