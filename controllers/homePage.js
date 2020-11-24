const models = require('../models')

exports.homePage = function(req, res, next) {
  res.render('index', { title: 'Home', user: req.user });
}