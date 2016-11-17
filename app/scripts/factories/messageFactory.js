(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    
    var getRoomByID = function(roomID) {
        var ref = firebase.database().ref().child("messages").orderByChild("roomID").equalTo(roomID);
        return $firebaseArray(ref);
    }

    return {
      getRoomByID: getRoomByID 
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();