'use strict';

require('angular/angular');
require('angular-route');

var app = angular.module('app', ['ngRoute', 'auth0']);

require('.services/auth0')(app);

// app.config(['$routeProvider', function($routeProvider){
// 	$routeProvider.when('/', {
// 		templateUrl: '',
// 		controller: ''
// 	}).otherwise({
// 		redirectTo: '/'
// 	});
// }], ['authProvider', function(authProvider){
//     authProvider.init({
//       clientID: 'YOUR_CLIENT_ID',
//       callbackURL: location.href,
//       domain: 'YOUR_NAMESPACE'
// 	})
//     }]);

app.config(function(authProvider, $routeProvider){
	$routeProvider.when('/', {
		templateUrl: '',
		controller: ''
	}).otherwise({
		redirectTo: '/'
	});

	authProvider.init({
      clientID: 'YOUR_CLIENT_ID',
      callbackURL: location.href,
      domain: 'YOUR_NAMESPACE'
	});
});