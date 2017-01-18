var onlyGaryApp = angular.module('onlyGaryApp', ['ngRoute']);

onlyGaryApp.config(function($routeProvider, $locationProvider) {
	$routeProvider

		.when('/', {
			templateUrl : 'pages/home.html',
			controller : 'mainController'
		})

		.when('/about', {
			templateUrl : 'pages/about.html',
			controller : 'aboutController'
		})

		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller : 'contactController'
		});
	$locationProvider.html5Mode(true);
});

onlyGaryApp.controller('mainController', function($scope) {
	$scope.message = 'Test Main!';
});

onlyGaryApp.controller('aboutController', function($scope) {
	$scope.message = 'Test About!';
});

onlyGaryApp.controller('contactController', function($scope) {
	$scope.message = 'Test Contact!';
});