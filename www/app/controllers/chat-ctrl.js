angular.module('gpstream')
.controller('ChatCtrl', ['$scope', 'ChatService', function($scope, ChatService) {

  $scope.chat = {
  	sender: 'Viz' + Math.round(Math.random()*101)
  };
  //$scope.chats = ChatService.getMessages();
  $scope.chats = ChatService;
  //ChatService.$bind($scope, 'chats');

  $scope.addMessage = function() {
  	//ChatService.addMessage($scope.chat);
  	$scope.chats.$add($scope.chat);
  	//$scope.chats.push($scope.chat);
  	$scope.chat.message = '';
  };

}]);