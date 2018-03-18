  $(window).on(‘load’, function() {

  $("#find-me").on("click", getLocation);

   $(“#login-button”).on(“click”, function () {
       $(“#signup-button”).addClass(“convertToGrey”);
       $(“#signup-button”).removeClass(“active”);
       $(“#login-form”).show();
       $(“#signup-form”).hide();
       $(this).addClass(“active”).removeClass(“convertToGrey”);
   });

   $(“#signup-button”).on(“click”, function () {
       $(“#login-button”).addClass(“convertToGrey”);
       $(“#login-button”).removeClass(“active”);
       $(“#login-form”).hide();
       $(“#signup-form”).show();
       $(this).addClass(“active”).removeClass(“convertToGrey”);
   });

   $(“#signup-next”).on(“click”, function () {

   })

   function getLocation() {

     $.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCp3aTtHLbEh8qxnsXxPGo2mJbzuRmx8QY", function(data) {
       console.log(data)
     }).catch((err) => {
       console.error(err.message);
     });
   };

 });
