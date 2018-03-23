var authController = require('../controllers/authcontroller.js');
var passport = require('passport');

module.exports = function (app) {
    app.get('/signup', authController.signup);
    app.get('/login', authController.signin);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/api/v1/interests/14',
        failureRedirect: '/login'
    })),
    app.get('/home', isLoggedIn, authController.home);
    app.get('/logout', authController.logout);
    app.post('/login', passport.authenticate('local-signin', {
        successRedirect: '/home',
        failureRedirect: '/login'
    }
    ));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            req.session.isLoggedIn = true;
            return next();
        }
            
        res.redirect('/login');
    };
}