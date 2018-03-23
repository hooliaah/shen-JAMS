var db = require("../models");
var turf = require("turf");
var axios = require("axios");
// var passport = require("passport");

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

  // app.get("/api/v1/getuser", function(req, res) {
  //   passport.deserializeUser(function (id, done) {
  //     console.log("id",id)
  //   });
  //   res.json(id);
  // });

  // post user to database
  app.post("/api/v1/signup", function(req, res) {
    db.User.create(req.body).then(function(dbPost) {
      console.log("created id", dbPost.dataValues.id);
      res.json(dbPost.dataValues.id);
    });
  })

  // retrieve userid by email search
  app.get("/api/v1/search/email/:email", function(req, res) {
    db.User.findOne({
      where: {
        email_address: req.params.email
      }
    }).then(function(record) {
      console.log(record);
      console.log("given " + req.params.email + " returns ID and email " + record.dataValues.id, record.dataValue.email_address);
      var hbsObject = {
        record: record.dataValues.id
      }
      res.json(record.dataValues.id
      );
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
  app.put("/api/v1/interests/:userid", function(req, res) {
    console.log("req.body.interestData ", req.body.interestData)
    db.User.update(req.body.interestData, {
        where: {
          id: req.params.userid
        }
      })
      .then(function(result) {
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
  app.post("/api/v1/addevent", function(req, res) {
    let coords = [];
    let attendees = [1, 2, 3, 4]

    let count = 0;
    db.Event.create(req.body).then((dbPost) => {
      attendees.forEach((attendee) => {
        count++;
        db.Event.findById(dbPost.dataValues.id).then((corral) => {
          db.User.findById(attendee).then((user) => {
            let address = user.dataValues.address;
            let plus = address.replace(/\s/g, "+");
            var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + plus + '&key=AIzaSyA4xkuT8TnhzYOPwd_otmmso3HiwO7ScBo';
            axios.get(url)
              .then(response => {
                coords.push(turf.point([response.data.results[0].geometry.location.lng, response.data.results[0].geometry.location.lat]));
                // console.log(turf.point([response.data.results[0].geometry.location.lng, response.data.results[0].geometry.location.lat]))
              }).catch(error => {
                console.log(error);
              });
            corral.addEvent(user);

          });
        });
        if (count === attendees.length) {
          // console.log('coords4', coords);
          res.json(centerz(coords, req.body.interests));
          console.log('returned', centerz(coords, req.body.interests))

        }
      });

    });
  });

  // add friend post the userid and friendid
  // (6) req.body.id
  app.post("/api/v1/friends/:userid", function(req, res) {
    db.User.findById(req.params.userid).then((user) => {
      db.User.findById(req.body.friendid).then((friend) => {
        user.addFriend(friend).then((dbPost) => {
          console.log(dbPost)
          res.json(dbPost);
        })
      })
    });
  });

  // add to user_event (old integrated into create event)
  // app.post("/api/v1/events/:userid", function(req, res) {
  //   db.User.findById(req.params.userid).then((user) => {
  //     db.Event.findById(req.body.eventid).then((corral) => {
  //       user.addEvent(corral).then((dbPost) => {
  //         console.log(dbPost)
  //       })
  //     })
  //   });
  // });


};

function centerz(lnglat, interest) {
  var feat = turf.featureCollection(lnglat)
  // console.log(feat)
  var centroid = turf.centroid(feat)
  console.log(centroid);
  let cent = centroid.geometry.coordinates[1] + "," + centroid.geometry.coordinates[0]
  // console.log(cent);
  // return cent;
  return nearbyLoc(cent, interest)
};

function nearbyLoc(location, keyword) {
  let places = {

  };
  let url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + location + "&radius=3200&keyword=" + keyword + "&key=AIzaSyDQEYOINnOnunGRCH1UmluDgkh_au21SCQ";

  axios.get(url)
  .then(response => {
    places = response.data;
    // console.log('placejson', places)
    return places;
  });
};
