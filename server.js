// Team Shen Jams. Project Friend Corral. March 2018

var express = require("express");
var bodyParser = require("body-parser");
var https = require("https");
var passport = require('passport');
var session = require('express-session');

// set port
var PORT = process.env.PORT || 9000;

// Requiring our models for syncing
var db = require("./models");

var app = express();

app.use(express.static("public"));

// use body-parser, json format
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use passport
app.use(session({ secret: 'shen-cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// use handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// require routes
require("./routes/html-routes.js")(app);
require("./routes/user-routes.js")(app);
var authRoute = require("./routes/auth.js")(app);

// require passport strategies
require('./config/passport.js')(passport, db.users);


// sync sequelize models then start Express app
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});