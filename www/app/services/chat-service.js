angular.module('gpstream')
.factory('ChatService', ['$firebase', function($firebase) {

  var chatRef = new Firebase("https://vizifire.firebaseio.com/chat");

  /*var getMessages = function() {
    var messages = [];
    chatRef.on("child_added", function(snapshot) {
      messages.push(snapshot.val());
    });
    return messages;
  };

  var addMessage = function(message) {
    chatRef.push(message);
  }

  return {
    getMessages: getMessages,
    addMessage: addMessage
  };*/

  return $firebase(chatRef);

}]);
