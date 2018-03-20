var bCrypt = require('bcrypt-nodejs');

module.exports = function (passport, user) {
    var User = user;
    var LocalStrategy = require('passport-local').Strategy;
    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'email_address',
            passwordField: 'password',
            passReqToCallback: true
        },
        function (req, email, password, done) {
            var generateHash = function (password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };
            User.findOne({
                where: {
                    email_address: email_address
                }
            }).then(function (user) {
                if (user) {
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
                } else {
                    var userPassword = generateHash(password);
                    var data =
                        {
                            email_address: email_address,
                            password: userPassword,
                            first_name: req.body.first_name,
                            last_name: req.body.last_name
                        };
                    User.create(data).then(function (newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            });
        }
    ));
}