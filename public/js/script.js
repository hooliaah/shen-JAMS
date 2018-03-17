$(document).ready(function() {


  // Scott's old testing code
  $("#find-me").on("click", getLocation);

  // var x = document.getElementById("demo");

  function getLocation() {

    $.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCp3aTtHLbEh8qxnsXxPGo2mJbzuRmx8QY", function(data) {
      console.log(data)
    }).catch((err) => {
      console.error(err.message);
    });
  };

});

  //   var getPosition = function(options) {
  //     return new Promise(function(resolve, reject) {
  //       navigator.geolocation.watchPosition(resolve, reject, options);
  //     });
  //   }
  //
  //   getPosition()
  //     .then((position) => {
  //       console.log(position);
  //       showPosition(position);
  //     })
  //     .catch((err) => {
  //       console.error(err.message);
  //     });
  // };
  //
  // function showPosition(position) {
  //   var latLon = {
  //     latitude: position.coords.latitude,
  //     longitude: position.coords.longitude
  //   };
  //   x.innerHTML = "Latitude: " + latLon.latitude +
  //     "<br>Longitude: " + latLon.longitude;
  //   $.post("/api/locate", latLon, function(response) {
  //     console.log("sent", latLon);
  //   }).then(function(response) {
  //     console.log("then response", response);
  //   });
  // };
  // console.log("document loaded");
