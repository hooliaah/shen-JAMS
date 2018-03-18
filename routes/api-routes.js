// Routes
// =============================================================
module.exports = function(app) {

   // Each of the below routes just handles the HTML page that the user gets sent to.
 
   // login - checks 
   app.get("/api/v1/profile", function(req, res) {
     // retrieve profile into data
     res.JSON(data);
   });
 
   app.get("api/v1/events", function(req, res) {
      // retrieve events into data
      res.JSON(data);
    });

    app.get("api/v1/friends", function(req, res) {
      // retrieve friends into data
      res.JSON(data);
    });

    app.post("api/v1/profile", function(req, res) {
      // add profile, return status
      res.JSON(status);
    });

    app.post("api/v1/friends", function(req, res) {
      // add friends, return status
      res.JSON(status);
    });

    app.post("api/v1/events", function(req, res) {
      // add event, return status
      res.JSON(status);
    });

    app.put("api/v1/profile", function(req, res) {
      // update profile, return status
      res.JSON(status);
    });

    app.put("api/v1/friends", function(req, res) {
      // update friends, return status
      res.JSON(status);
    });

    app.put("api/v1/events", function(req, res) {
      // update events, return status
      res.JSON(status);
    });

    app.delete("api/v1/profile", function(req, res) {
      // delete profile, return status
      res.JSON(status);
    });

    app.delete("api/v1/friends", function(req, res) {
      // delete freinds, return status
      res.JSON(status);
    });

    app.delete("api/v1/events", function(req, res) {
      // delete event, return status
      res.JSON(status);
    });

   }