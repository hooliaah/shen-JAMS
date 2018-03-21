var exports = module.exports = {}
 
exports.signup = function(req, res) {
    res.render('login');
}

exports.signin = function(req, res) {
    res.render('login');
}

exports.home = function(req, res) {
    res.render('home');
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}