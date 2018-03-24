$(window).on('load', function () {

  // retrieve the userId from the url suffix
  // if not on login page get user first_name from database to populate menu item
  var parts = window.location.href.split('/');

  var userId = parts.pop() || parts.pop();  // handle potential trailing slash

  if (!isNaN(userId)) {
    $("#name-box").show();
    $("#menu-box").show();
    $.get("/api/v1/user/" + userId).then(function (data) {
      // console.log("data",data);
      firstName = data[0].first_name;
      // Convert to Camel Case
      firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
      $("#user-name").text(firstName);
    })
  } else {
    $("#name-box").hide();
    $("#menu-box").hide();
  }

  // $("find-me").on("click", getLocation);
  $("#login-form").show();
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
    $("#signup-form").show();
    $("#login-form").hide();
    $(this).addClass("active").removeClass("convertToGrey");
  });

    // SIGNUP Create new user
  // Then update interests
  // Then add friends

  $(document).on("submit", "#signup-form", handleSignupFormSubmit);

  // A function to handle what happens when the form is submitted to create a new user
  function handleSignupFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    console.log("entered HandleSignupForm validation");
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
        first_name: $("#first-name").val().trim().trim(),
        last_name: $("#last-name").val().trim().trim(),
        password: $("#password").val().trim().trim(),
        phone: $("#phone").val().trim().trim(),
        email_address: $("#email-address").val().trim().trim(),
        address: $("#address-street").val().trim().trim() + ", " + $("#address-city-state").val().trim().trim() + " " + $("#address-zip").val().trim().trim()
      }

      // post user profile and return interests
      $.post("api/v1/signup", userData)
        // $.post("signup", userData)

        .then(function (data) {
          userId = data; // data returns the created userid
          console.log("userId", data);
          window.location.href = "/api/v1/interests/" + userId;
          // $.get("/api/v1/interests/" + userId);
        })
    }
  }

  // update interests and return friends list

  $(document).on("submit", "#interests-form", handleInterestFormUpdate);

  // A function to update the interest for the user

  function handleInterestFormUpdate(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    console.log("handleInterestFormUpdate");
    console.log("interest coffee val()", $("#interest-coffee").val())
    var interestData = {
      interest_coffee: $("#interest-coffee").is(":checked"),
      interest_bar: $("#interest-bar").is(":checked"),
      interest_restaurant: $("#interest-restaurant").is(":checked"),
      interest_hike: $("#interest-hike").is(":checked"),
      interest_park: $("#nterest-park").is(":checked"),
      interest_gym: $("#interest-gym").is(":checked"),
      interest_club: $("#interest-club").is(":checked"),
      interest_churro: $("#interest-churro").is(":checked")
    }
    console.log("interestData ", interestData);

    $.put("api/v1/interests/" + userId, interestData)
      .then(function (data) {
        console.log("interests ", data);
        window.location.href = "/api/v1/friends/" + userId;
      })
  }

  // create new event
  $(document).on("click", "#create-event-button", createNewEvent);

  // A function to create a new event
  function createNewEvent(event) {
        event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    var newEventData = {
      event_name: $("#event-name").val().trim().trim(),
      event_time: $("#event-time").val().trim().trim(),
      interests: 'restaurant'
    }
    console.log("newEventData",newEventData);

    $.post("/api/v1/addevent", newEventData)
      .then(function (data) {
        console.log("new event ", data);
        window.location.href = "/showlocation";
        
      })
  };

  $(document).on("click", "#add-event-button", goToNewEvent);

  // A function to create a new event
  function goToNewEvent(event) {
    window.location.href = "/addevent";
  }
});
