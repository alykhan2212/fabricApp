let models = require("../models");


exports.userDetails = function(req, res, next) {
	models.User.findAll().then(userObj => {
		res.render('userDetails',{
				title: 'User Details - VRS',
				user: req.user,
				userObjs: userObj
		});
		
		// res.send({userObj: userObj });
		// console.log(userObj);
	})
	// res.render('userDetails', { title: 'User Details - VRS', user: req.user });
}
