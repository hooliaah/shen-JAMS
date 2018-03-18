var db = require("../models");

module.exports = function(app) {
  // post user to database
  app.post("/api/v1/signup", function(req, res) {
    db.User.create(req.body).then(function(dbPost) {
      console.log(dbPost.dataValues.id);
      
      // res.json(dbPost);
    });
  });


  // get user's friends
  app.get("/api/v1/home/:userid", function(req, res) {
    db.User.findAll({

      include: [{
        model: user_friends,
        as: 'Friends',
        where: {
          UserId: req.params.userid
        },
        include: [Users]
      }]
    }).then(function(err, dbPost) {
      if (err) {throw err};
      res.json(dbPost);
      console.log(dbPost);
    });
  });

  // get user's events
  app.get("/api/v1/home/:userid", function(req, res) {
    db.User.findAll({
      // include: [{
      //     model: user_events,
      //     where: {
      //       EventID: req.params.userid
      //     },
      //     include: [Events]
      //   }
      // ]
    }).then(function(dbPost) {
      res.json(dbPost);
      console.log(dbPost);
    });
  });

  // post user event
  app.post("/api/v1/home/:userid", function(req, res) {
    db.User.create(req.body).then(function(dbPost) {
      res.json(dbPost);
      console.log(dbPost);
    });
  });


};
