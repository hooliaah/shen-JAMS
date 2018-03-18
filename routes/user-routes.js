var db = require("../models");

module.exports = function (app) {
  // post user to database
  app.post("/api/signup/:email", function(req, res) {
    db.User.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // get user's friends
  app.get("/api/home/:userid/friends", function (req, res) {
    db.User.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // get user's events
  app.get("/api/home/:userid/friends", function (req, res) {
    db.User.findAll({}).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // post user event
  app.post("/api/home/:userid/events", function (req, res) {
    db.User.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });


}

// client javascript stuff
$(document).ready(function() {


  // Scott's old testing code
  $("#find-me").on("click", getLocation);

  // var x = document.getElementById("demo");

  function getLocation() {

    $.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCp3aTtHLbEh8qxnsXxPGo2mJbzuRmx8QY", function(data) {
      console.log(data)
    }).catch((err) => {
      console.error(err.message);
    });
  };

});
