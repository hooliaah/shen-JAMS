var db = require("../models");

module.exports = function(app) {

  // scott wrote this to get the user profile back for testing
  app.get("/api/v1/user/:userid", function(req, res) {
    db.User.findAll({
      where: {
        id: req.params.userid
      }
    }).then(function(dbPost) {
      res.json(dbPost);
      console.log(dbPost);
    });
  });

  // post user to database
  app.post("/api/v1/signup", function(req, res) {
    db.User.create(req.body).then(function(dbPost) {
      console.log(dbPost.dataValues.id);
      $.get("/api/v1/user/" + dbPost.dataValues.id, function(req, res) {
        console.log("res ",res);
      })
      .then(function(dbPost) {
        console.log("dbPost",dbPost);
        res.json(dbPost);
    })
  });
});

  
  app.post("/api/v1/signup", function(req, res) {
    db.User.create(req.body).then(function(dbPost) {

      console.log("new user ID", dbPost.dataValues.id);
      app.get("/api/v1/user/" + dbPost.dataValues.id, function(req, res) {
        console.log("res ",res);
        return(res)
      }).then(function(data){
        res.json(data);
      })

    });
  });

  


  // get user's friends
  app.get("/api/v1/home/:userid/friends", function(req, res) {
    db.User.findAll({
      where: {
        id: req.params.userid
      },
      include: [{
        model: db.User,
        as: 'friends',
        through: 'user_friends'
      }]
    }).then(function(dbPost) {
      res.json(dbPost);
      console.log(dbPost);
    });
  });

  // get user's events
  app.get("/api/v1/home/:userid/events", function(req, res) {
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
      res.json(dbPost);
      console.log(dbPost);
    });
  });

  // post user event
  app.post("/api/v1/home/:userid/:eventname", function(req, res) {
    db.User.create(req.body).then(function(dbPost) {
      res.json(dbPost);
      console.log(dbPost);
    });
  });

};
