'use strict';

require('angular/angular');
require('angular-route');

var app = angular.module('app', ['ngRoute']);

require('')(app);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: '',
		controller: ''
	}).otherwise({
		redirectTo: '/'
	});
}]);