var db = require("../models");
var sequelize = require("sequelize");
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
      console.log("created id", dbPost.dataValues.id);
      res.json(dbPost.dataValues.id);
    });
  })

  app.get("/api/v1/interests/:userid", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.userid
      }
    }).then(function(record) {
      console.log("returned ", record.dataValues);
      var hbsObject = {
        record: record.dataValues
      }
      res.render("addinterests", hbsObject);
    });
  })

  // update interests (scott:not tested yed)
  app.put("/api/v1/interests/:userid", function(req, res){
    console.log("req.body.interestData ", req.body.interestData)
    db.User.update(req.body.interestData, 
      { where: 
        {id: req.params.userid}
    })
    .then(function (result) {
      console.log(result);  
      return;
  });
})

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

  // post interests
  app.post("/api/v1/addinterests", function(req, res) {
    res.render("addinterests", req.body, function(err, html) {
      console.log("html ", html);
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
    db.User.findById(req.params.userid).then((user) => {
      db.User.findById(6).then((friend) => {
        user.addFriend(friend).then((dbPost) => {
          console.log(dbPost)
        })
      })
    });
  });

  // add to user_event
  app.post("/api/v1/events/:userid", function(req, res) {
    db.User.findById(req.params.userid).then((user) => {
      db.Event.findById(4).then((corral) => {
        user.addEvent(corral).then((dbPost) => {
          console.log(dbPost)
        })
      })
    });
  });


};
