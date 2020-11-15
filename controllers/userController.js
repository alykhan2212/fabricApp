
exports.show_login = function(req, res, next) {
    res.render('login', {title:'Login'});   
}

exports.show_signup = function(req, res, next) {
    res.render('signup');
}