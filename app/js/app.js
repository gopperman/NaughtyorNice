'use strict';


// Declare app level module which depends on filters, and services
angular.module('NoN', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'NaughtyorNice/app/partials/main.html', controller: 'mainController'});
    $routeProvider.when('/naughty', {templateUrl: 'NaughtyorNice/app/partials/naughty.html', controller: 'MyCtrl'});
    $routeProvider.when('/nice', {templateUrl: 'NaughtyorNice/app/partials/nice.html', controller: 'MyCtrl2'});
    $routeProvider.otherwise({redirectTo: '/NaughtyorNice/'});
  }]);
