angular.module('gpstream')
.factory('LocationService', [function() {

  var onSuccess = function(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
  };

  function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
  };

  var getCurrentPosition = function() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  };

  var watchPosition = function() {
    navigator.geolocation.watchPosition(onSuccess, onError);
  };
  
  return {
    getCurrentPosition: getCurrentPosition,
    watchPosition: watchPosition
  };

}]);
