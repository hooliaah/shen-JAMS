$(window).on('load', function() {

  // getLocation();
  
  // $("find-me").on("click", getLocation);

  $("#signup-button").addClass("convertToGrey");

  $("#login-button").on("click", function () {
      $("#signup-button").addClass("convertToGrey");
      $("#signup-button").removeClass("active");
      $("#login-form").show();
      $("#signup-form").hide();
      $(this).addClass("active").removeClass("convertToGrey");
  });

  $("#signup-button").on("click", function () {
      $("#login-button").addClass("convertToGrey");
      $("#login-button").removeClass("active");
      $("#login-form").hide();
      $("#signup-form").show();
      $(this).addClass("active").removeClass("convertToGrey");
  });
  
  // function getLocation() {
  
  //   $.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCp3aTtHLbEh8qxnsXxPGo2mJbzuRmx8QY", function(data) {
  //     console.log(data)
  //   }).catch((err) => {
  //     console.error(err.message);
  //   });
  // };

  // Submit User

  $(document).on("submit", "#signup-form", handleSignupFormSubmit);
 
  // A function to handle what happens when the form is submitted to create a new Author
  function handleSignupFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    console.log("entereed HandleSignupForm validation");
    if (!$("#first-name").val().trim().trim()
        // !$("#last-name").val().trim().trim() ||
        // !$("#phone").val().trim().trim() ||
        // !$("#password").val().trim().trim() ||
        // !$("#address-street").val().trim().trim() ||
        // !$("#address-city-state").val().trim().trim() ||
        // !$("#address-zip").val().trim().trim()
    ) {
      return;
    } else {
      console.log("entered userData formation");
      var userData = {
        first_name : $("#first-name").val().trim().trim(),
        last_name : $("#last-name").val().trim().trim(),
        password : $("#password").val().trim().trim(),
        phone : $("#phone").val().trim().trim(),
        email_address : $("#email-address").val().trim().trim(),
        address : $("#address-street").val().trim().trim() + "," + $("#address-city-state").val().trim().trim() + $("#address-zip").val().trim().trim() 
      }

      $.post("api/v1/signup", userData)
      // .then(function(res, req) {
      //   res.json(res);
      // })
    }
   
  }
 
});
