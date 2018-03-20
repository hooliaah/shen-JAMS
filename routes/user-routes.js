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
  app.get("/api/v1/friends/:userid", function(req, res) {
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
  app.get("/api/v1/events/:userid", function(req, res) {
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
  app.post("/api/v1/events", function(req, res) {
    db.Event.create(req.body).then(function(dbPost) {
      res.json(dbPost);
      console.log(dbPost);
    });
  });

  // add friend
  app.post("/api/v1/friends/:userid", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.userid
      },
      include: [{
        model: db.User,
        as: 'friends',
        through: 'user_friends'
      }]
    }).on('success', function(user) {
      user.setUser({FriendId: req.params.friends});
    }).then(function(dbPost) {
      res.json(dbPost);
      console.log(dbPost);
    })
  })

};
