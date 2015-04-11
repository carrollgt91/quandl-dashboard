angular.module('curateHealthDashboard.services')
.factory('Comments', function() {

  var Comments = {};

  Comments.get = function(facilityId) {
    var comments = [];
    comments.push(Comments.generateComment(-1))
    return comments;
  };

  Comments.generateComment = function(polarity) {
    var negComment = { 
      firstName: "Grayson",
      lastName: "Carroll",
      location: "ER Room 4040",
      text: "I've had a terrible time here thus far. The nurses have been subpar, overall a just not fun. It took forever to see the doctor, and he only gave me 5 minutes.",
      polarity: -1,
      time: "2013-01-28T07:39:04.1279976-06:00",
      confidence: 0.5
    };


    return negComment;
  };

  return Comments;
});



