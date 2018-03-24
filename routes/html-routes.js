var db = require("../models");
var sequelize = require("sequelize");
var path = require("path");

// Routes

module.exports = function(app) {

  // login - checks
  app.get("/", function(req, res) {
    // check for session key
    // if session key go to home page else go to login page
    res.render("login");
  });


  app.get("/home", function(req, res) {
      // check for session key
      // if session key go to home page else go to login page
      res.render("home");
    });

  app.get("/home/:userid", function(req, res) {
    db.User.findAll({
      where: {
        id: req.params.userid
      },
      include: [{
        model: db.Event,
        as: 'Events',
        through: 'user_event'
      }]
    }).then(function(dbPost) {
      var hbsObject = {
        record: dbPost[0]
      }
      res.render("home", hbsObject);
      console.log("hbsObject", hbsObject);
      // res.json(hbsObject);
    });
  })


  app.get("/addevent/:userid", function(req, res) {
    // check for session key
    // if session key go to home page else go to login page
    res.render("addevent");
  });

  app.get("/showlocation", function(req, res) {
    // check for session key
    // if session key go to home page else go to login page
    res.render("showlocation");
  });

}