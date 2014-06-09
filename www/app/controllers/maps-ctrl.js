angular.module('gpstream')
.controller('MapsCtrl', ['$scope', function($scope) {

  $scope.viz = 'soni';

  $scope.map = {
    center: {
        latitude: 45,
        longitude: -73
    },
	draggable : true,
    zoom: 8
  };

}]);