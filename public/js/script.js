$(window).on('load', function() {
  
  // $("find-me").on("click", getLocation);

  $("#signup-button").addClass("convertToGrey");
  $("#login-form").show();

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
  
  function getLocation() {
      $.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCp3aTtHLbEh8qxnsXxPGo2mJbzuRmx8QY", function(data)
      {
        console.log(data)
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  // SIGNUP Create new user
  // Then update interests
  // Then add friends

  $(document).on("submit", "#signup-form", handleSignupFormSubmit);
 
  // A function to handle what happens when the form is submitted to create a new user
  function handleSignupFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    console.log("entereed HandleSignupForm validation");
    if (!$("#first-name").val().trim().trim() ||
        !$("#last-name").val().trim().trim() ||
        !$("#phone").val().trim().trim() ||
        !$("#password").val().trim().trim() ||
        !$("#address-street").val().trim().trim() ||
        !$("#address-city-state").val().trim().trim() ||
        !$("#address-zip").val().trim().trim()
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
        address : $("#address-street").val().trim().trim() + ", " + $("#address-city-state").val().trim().trim() + " " + $("#address-zip").val().trim().trim() 
      }

      // post user profile and return interests

      $.post("api/v1/signup", userData)
      .then(function(data){
        console.log("data", data);
        window.location.href="/api/v1/interests/" + data;
      })    
    }
  }

  // update interests and return friends list

  $(document).on("submit", "#interests-form", handleInterestFormUpdate);
 
  // A function to handle what happens when the form is submitted to create a new user
  function handleInterestFormUpdate(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    console.log("handleInterestFormUpdate");
    console.log("interest coffee val()", $("#interest-coffee").val())
      var interestData = {
        interest_coffee : $("#interest-coffee").val(),
        interest_bar : $("#interest-bar").val(),
        interest_restaurant : $("#interest-restaurant").val(),
        interest_hike : $("#interest-hike").val(),
        nterest_park : $("#nterest-park").val(),
        interest_gym : $("#interest-gym").val(),
        interest_club : $("#interest-club").val(),
        interest_churro : $("#interest-churro").val()
      }

      $.put("api/v1/interests/" + record.id, userData)
      .then(function(data){
        console.log("interests ", data);
        window.location.href="/api/v1/friends/" + data;
      })    
    }
  }


});
