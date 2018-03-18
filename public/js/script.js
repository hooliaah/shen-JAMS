$(window).on('load', loadWindow);

   // login page operations

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

              <div class='form-group'>
                  <label>Default Address:</label>
                  <input type = 'text' placeholder = 'Street, Apt #' class='form-control'/>
                  <input type = 'text' placeholder = 'City' class='form-control'/>
                  <input type = 'text' placeholder = 'State' class='form-control'/>
                  <input type = 'text' placeholder = 'Zip Code' class='form-control'/>
              </div>

              <button class='btn btn-primary btn-block'>Signup</button>

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
      $(".signup-button").addClass("convertToGrey");
      $(".signup-button").removeClass("active");
      $(this).addClass("active").removeClass("convertToGrey");

      $(".content").html(login);

  });

  $(".signup-button").on("click", function () {
      $(".login-button").addClass("convertToGrey");
      $(".login-button").removeClass("active");
      $(this).addClass("active").removeClass("convertToGrey");


      $(".content").html(signup);


  });
}

// $(document).on("click","#login-button", showLoginForm())
// $(document).on("click","#signup-button", showSignupForm())

function showLoginForm() {
  console.log('login form show');
}

function showSignupForm() {

}

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
