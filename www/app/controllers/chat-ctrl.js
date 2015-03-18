angular.module('gpstream')
.controller('ChatCtrl', ['$scope', '$ionicScrollDelegate', 'ChatService', 'LocationService', function($scope, $ionicScrollDelegate, ChatService, LocationService) {

  $scope.chat = {
  	sender: 'Viz' + Math.round(Math.random()*101)
  };
  //$scope.chats = ChatService.getMessages();
  $scope.chats = ChatService;
  //ChatService.$bind($scope, 'chats');

  $scope.$watch('chats', function() {
    $ionicScrollDelegate.scrollBottom(true);
  }, true);

  $scope.addMessage = function() {
  	//ChatService.addMessage($scope.chat);
  	$scope.chats.$add($scope.chat);
  	//$scope.chats.push($scope.chat);
  	$scope.chat.message = '';
    $ionicScrollDelegate.scrollBottom(true);
  };

  $scope.getCurrentPosition = function() {
    LocationService.getCurrentPosition();
  };

  $scope.watchPosition = function() {
    console.log('watching !!!');
    LocationService.watchPosition();
  };

}]);