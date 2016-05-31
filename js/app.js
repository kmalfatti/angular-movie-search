var app = angular.module('movieApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../partials/home.html'
    })
    .when('/:id', {
      templateUrl: '../partials/show.html',
      controller: 'showController'
    })
    
  $locationProvider.html5Mode(true);
});