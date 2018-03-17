$(document).ready(function() {

   // login page operations

   // var loginButton = $("#login-button");
   // var signupButton = $("#signup-button");


   $(document).on("click","#login-button", showLoginForm())
   $(document).on("click","#signup-button", showSignupForm())

   function showLoginForm() {

   }

   function showSignupForm() {

   }
});

// Scott's old testing code      
// $("#find-me").on("click", getLocation())

// var x = document.getElementById("demo");

// function getLocation(){
//    var getPosition = function (options) {
//       return new Promise(function (resolve, reject) {
//          navigator.geolocation.watchPosition(resolve, reject, options);
//       });
//       }
      
//       getPosition()
//       .then((position) => {
//          console.log(position);
//          showPosition(position);
//       })
//       .catch((err) => {
//          console.error(err.message);
//       });
// }

// function showPosition(position) {
//    var latLon = { latitude: position.coords.latitude, longitude: position.coords.longitude };
//    x.innerHTML = "Latitude: " + latLon.latitude + 
//    "<br>Longitude: " + latLon.longitude; 
//    $.post("/api/locate", latLon, function(response) {
//       console.log("sent", latLon);
//    }
//    ).then(function(response) {
//       console.log("then response", response);
//    });
// };
// console.log("document loaded");
