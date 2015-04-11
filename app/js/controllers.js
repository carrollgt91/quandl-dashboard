angular.module('curateHealthDashboard.controllers')
.controller('RootCtrl', function($scope, Comments) {
  $scope.something = "Hello, world!";

  $scope.facility = {
    name: "Vanderbilt Hospital"
  }

  console.log(Comments.get(1));
});