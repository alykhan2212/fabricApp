
exports.isLoggedIn = function(req,res,next){
    if(req.isAuthenticated())
        next();
    else
        res.redirect('/login');
}

exports.isLoggedOut = function(req,res,next){
    if(req.isAuthenticated())
        res.redirect('/');
    else
        next();
}


exports.userRole = function(req,res,next){

    if(req.user.role == 'admin' && req.user.is_active == true){
        next();
    }
    else if(req.user.role == 'super_admin' && req.user.is_active == true){
        next();
    }
    else{
        res.redirect('/');
    }
}
