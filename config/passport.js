// var bCrypt = require('bcrypt-nodejs');

// module.exports = function (passport, user) {
//     var User = user;
//     var LocalStrategy = require('passport-local').Strategy;

//     //serialize
//     passport.serializeUser(function (user, done) {
//         done(null, user.id);
//     });

//     // deserialize user 
//     passport.deserializeUser(function (id, done) {
//         User.findById(id).then(function (user) {
//             if (user) {
//                 done(null, user.get());
//             } else {
//                 done(user.errors, null);
//             }
//         });
//     });

// // new signup in Passport
//     passport.use('local-signup', new LocalStrategy(
//         {
//             usernameField: 'email_address',
//             passwordField: 'password',
//             passReqToCallback: true
//         },
//         function (req, email_address, password, done) {
//             var generateHash = function (password) {
//                 return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
//             };
//             User.findOne({
//                 where: {
//                     email_address: email_address
//                 }
//             }).then(function (user) {
//                 if (user) {
//                     return done(null, false, {
//                         message: 'That email is already taken'
//                     });
//                 } else {
//                     var userPassword = generateHash(password);
//                     var data =
//                         {
//                             email_address: email_address,
//                             password: userPassword,
//                             first_name: req.body.first_name,
//                             last_name: req.body.last_name,
//                             phone: req.body.phone,
//                             address: req.body.address
//                         };
//                     User.create(data).then(function (newUser, created) {
//                         if (!newUser) {
//                             return done(null, false);
//                         }
//                         if (newUser) {
//                             console.log("NEW USER DATA!!!" + newUser.id);
//                             return done(null, newUser);
//                         }
//                     });
//                 }
//             });
//         }
//     ));

//     //LOCAL SIGNIN
//     passport.use('local-signin', new LocalStrategy(
//         {
//             // by default, local strategy uses username and password, we will override with email
//             usernameField: 'email_address',
//             passwordField: 'password',
//             passReqToCallback: true // allows us to pass back the entire request to the callback
//         },

//         function (req, email_address, password, done) {
//             var User = user;
//             var isValidPassword = function (userpass, password) {
//                 return bCrypt.compareSync(password, userpass);
//             }

//             User.findOne({
//                 where: {
//                     email_address: email_address
//                 }
//             }).then(function (user) {
//                 if (!user) {
//                     return done(null, false, {
//                         message: 'Email does not exist'
//                     });
//                 }
//                 if (!isValidPassword(user.password, password)) {
//                     return done(null, false, {
//                         message: 'Incorrect password.'
//                     });
//                 }
//                 var userinfo = user.get();
//                 return done(null, userinfo);
//             }).catch(function (err) {
//                 console.log("Error:", err);
//                 return done(null, false, {
//                     message: 'Something went wrong with your Signin'
//                 });
//             });
//         }
//     ));
// }

