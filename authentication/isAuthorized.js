
exports.isLoggedOut = function(req,res,next){
    if(req.isAuthenticated())
        next();
    else
        res.redirect('/login');
}

exports.isLoggedin = function(req,res,next){
    if(req.isAuthenticated())
        res.redirect('/');
    else
        next();
}