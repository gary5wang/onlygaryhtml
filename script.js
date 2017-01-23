var onlyGaryApp = angular.module('onlyGaryApp', ['ngRoute']);

onlyGaryApp.config(function($routeProvider, $locationProvider) {
	$routeProvider

		.when('/', {
			templateUrl : 'pages/home.html',
			controller : 'mainController'
		})
		.when('/about', {
			templateUrl : 'pages/about.html',
		})
		.when('/contact', {
			templateUrl : 'pages/contact.html',
		})
		.when('/powerlifting', {
			templateUrl : 'pages/powerlifting.html',
		})
		.when('/gsxr750', {
			templateUrl : 'pages/gsxr750.html',
		})
		.when('/sc300', {
			templateUrl : 'pages/sc300.html',
		});
	$locationProvider.html5Mode(false);
});

onlyGaryApp.controller('mainController', function($scope) {
	// $scope.message = 'Test Main!';
});