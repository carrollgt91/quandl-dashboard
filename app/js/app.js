var app = angular.module('curateHealthDashboard', ["ui.router", "curateHealthDashboard.controllers", "curateHealthDashboard.services"], function() {
});

angular.module('curateHealthDashboard.services', []);
angular.module('curateHealthDashboard.controllers', []);

//routing
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('root', {
      url: "/dashboard",
      templateUrl: "templates/app.html",
      controller: "RootCtrl"
    })
  });