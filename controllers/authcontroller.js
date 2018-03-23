var exports = module.exports = {}
 
exports.signup = function(req, res) {
    res.render('signup');
}

exports.signin = function(req, res) {
    res.render('login');
}

exports.addInterests = function(req, res) {
    res.render('addinterests');
}

exports.home = function(req, res) {
    res.render('home', {user: req.session.isLoggedIn});
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}