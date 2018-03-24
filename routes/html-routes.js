var db = require("../models");
var sequelize = require("sequelize");
var path = require("path");

// // Routes
// // =============================================================
module.exports = function(app) {

  // login - checks 
  app.get("/", function(req, res) {
    // check for session key
    // if session key go to home page else go to login page
    res.render("login");
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

  app.get("/showlocation/:userid", function(req, res) {
    // check for session key
    // if session key go to home page else go to login page
    res.render("showlocation");
  });

  // app.get("addinterests/:userid", function(req, res) {
  //   db.User.findOne({
  //     where: {
  //       id: req.params.userid
  //     }
  //   }).then(function(record) {
  //     console.log("returned ", record.dataValues);
  //     var hbsObject = {
  //       record: record.dataValues
  //     }
  //     res.render("addinterests", hbsObject);
  //   });
  // })
//   // Each of the below routes just handles the HTML page that the user gets sent to.


//   app.get("/addinterests", function(req, res) {
//     // check for session key
//     // if session key go to home page else go to login page
//     res.render("addinterests");
//   });

//   app.get("/home", function(req, res) {
//     // load home page
//     res.render("home");
//   });

//   app.get("/profile", function(req, res) {
//     // load profile page
//     res.render("profile");
//   });

//   app.get("/friends", function(req, res) {
//     // load friends page
//     res.render("friends");
//   });

//   // could be modal in friends page
//   app.get("/addfriends", function(req, res) {
//     // load friends page
//     res.render("addfriends");
//   });

//   app.get("/events", function(req, res) {
//     // load events page
//     res.render("events");
//   });

//   // could be modal in events page
//   app.get("/addevent", function(req, res) {
//     // load addevent page
//     res.render("addevent");
//   });

//   app.get("/showlocation", function(req, res) {
//     // load location page
//     res.render("showlocation");
//   });

//   app.get("/notify", function(req, res) {
//     // load notify page
//     res.render("notify");
//   });

//   app.get("/addinterests", function(req, res) {
//     // load notify page
//     res.render("addinterests");
//   });
};
