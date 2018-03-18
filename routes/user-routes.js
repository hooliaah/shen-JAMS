var db = require("../models");

module.exports = function (app) {
  // post user to database
  app.post("/api/v1/signup", function(req, res) {
    db.User.create(req.body).then(function(dbPost) {
      console.log(dbPost.dataValues.id);
      
      // res.json(dbPost);
    });
  });

  // get user's friends
  app.get("/api/v1/home/:userid/friends", function (req, res) {
    db.User.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // get user's events
  app.get("/api/v1/home/:userid/friends", function (req, res) {
    db.User.findAll({}).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // post user event
  app.post("/api/v1/home/:userid/events", function (req, res) {
    db.User.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });


}
