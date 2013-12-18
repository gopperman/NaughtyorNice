'use strict';


// Declare app level module which depends on filters, and services
angular.module('NoN', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: '/app/partials/main.html', controller: 'mainController'});
    $routeProvider.when('/naughty', {templateUrl: '/app/partials/naughty.html', controller: 'MyCtrl'});
    $routeProvider.when('/nice', {templateUrl: '/app/partials/nice.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
