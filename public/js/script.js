$(window).on('load', function() {


  $("#find-me").on("click", getLocation);

   // var loginButton = $("#login-button");
   // var signupButton = $("#signup-button");
function loadWindow() {
  $('#login-button').on('click', showLoginForm);

  const signup = () => {

      return `
          <form>
              <div class='form-group'>
                  <label>First Name:</label>
                  <input type='text' placeholder='John' class='form-control'/>
              </div>

              <div class='form-group'>
                  <label>Last Name:</label>
                  <input type='text' placeholder='Doe' class='form-control'/>
              </div>

              <div class='form-group'>
                  <label>Email</label>
                  <input type='text' placeholder='Enter your Email' class='form-control'/>
              </div>

              <div class='form-group'>
                  <label>Password</label>
                  <input type = 'password' placeholder = 'Password: (must be at least 6 characters)' class='form-control'/>
              </div>

              <button class='btn btn-primary btn-block'>Signup</button>
              <button class='btn btn-primary btn-block'>Facebook</button>
          </form>
      `;
  };


  const login = () => {

      return `
          <form>
              <div class="form-group">
                  <label for="email">Email:</label>
                  <input type="text" class="form-control" name = "email" placeholder="Enter your email...">
              </div>

              <div class="form-group">
                  <label for="password">Password:</label>
                  <input type="password" class="form-control" name = "password" placeholder="Enter your password...">
              </div>

              <button class="btn btn-primary btn-block">Login</button>
          </form>
      `;
  };

  $(".content").html(login);

  $(".signup-button").addClass("convertToGrey");

  
  $(".login-button").on("click", function () {
      $("#signup-button").addClass("convertToGrey");
      $("#signup-button").removeClass("active");
      $("#login-form").hide();
      $("#signup-form").show();
      $(this).addClass("active").removeClass("convertToGrey");
  });

  $(".signup-button").on("click", function () {
      $("#login-button").addClass("convertToGrey");
      $("#login-button").removeClass("active");
      $("#login-form").show();
      $("#signup-form").hide();
      $(this).addClass("active").removeClass("convertToGrey");
  });
  

  function getLocation() {

    $.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCp3aTtHLbEh8qxnsXxPGo2mJbzuRmx8QY", function(data) {
      console.log(data)
    }).catch((err) => {
      console.error(err.message);
    });
  };

});




