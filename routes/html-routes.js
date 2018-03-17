
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // login - checks 
  app.get("/", function(req, res) {
    // check for session key
    // if session key go to home page else go to login page
    res.render("login");
  });

  app.get("/home", function(req, res) {
    // load home page
    res.render("home");
  });

  app.get("/profile", function(req, res) {
    // load profile page
    res.render("profile");
  });

  app.get("/friends", function(req, res) {
    // load friends page
    res.render("friends");
  });

  // could be modal in friends page
  app.get("/addfriends", function(req, res) {
    // load friends page
    res.render("addfriends");
  });

  app.get("/events", function(req, res) {
    // load events page
    res.render("events");
  });

  // could be modal in events page
  app.get("/addevent", function(req, res) {
    // load addevent page
    res.render("addevent");
  });

  app.get("/showlocation", function(req, res) {
    // load location page
    res.render("showlocation");
  });

  app.get("/notify", function(req, res) {
    // load notify page
    res.render("notify");
  });


  // app.get("/cms", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/cms.html"));
  // });

  // // blog route loads blog.html
  // app.get("/blog", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/blog.html"));
  // });

};
