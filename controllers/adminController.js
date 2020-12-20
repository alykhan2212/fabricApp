let models = require("../models");


exports.userDetails = function(req, res, next) {
	
	models.User.findAll({ raw: true }).then(userObj => {
		res.render('userDetails',{
				title: 'User Details - VRS',
				user: req.user,
				userObj:userObj
		});
		
		// res.send({userObj: userObj });
		// console.log(userObj);
	})
	// res.render('userDetails', { title: 'User Details - VRS', user: req.user });
}
