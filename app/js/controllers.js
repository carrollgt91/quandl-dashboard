angular.module('curateHealthDashboard.controllers')
.controller('RootCtrl', function($scope, Quandl) {
  $scope.something = "Hello, world!";

  $scope.facility = {
    name: " Hospital"
  };

  Quandl.search("crude+oil").then(function(data){
    $scope.docs = data.docs;
  });

  window.scope = $scope;

});