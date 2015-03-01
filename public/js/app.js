define(function(require){
	var angular = require('angular');
	var controller = require('./app/controllers/aboutController');
	var controllers = require('./app/controllers/controllers')

	var app = angular.module('seed',['ui.router','ngMaterial']);


	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/home");

		$stateProvider
		.state('home', {
			url: "/home",
			views:{
				'':{templateUrl: "templates/home.html"},
				'list@home':{
					templateUrl:'templates/home-list.html',
					controller: controllers.homeController
				}
			}
		})
		
		.state('home.list', {
	        url: '/list',
	        templateUrl: 'templates/home-list.html',
	        controller: function($scope) {
	            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
	        }
	    })

	    .state('home.paragraph', {
	        url: '/paragraph',
	        template: 'I could sure use a drink right now.'
	    })

		.state('about', {
	        url: '/about',
	        views: {
	            '': { templateUrl: 'templates/about.html' },
	            'columnOne@about': { template: 'Look I am a column!' },
	            'columnTwo@about': { 
	                templateUrl: 'templates/table-data.html',
	                controller: controller
	            }
	        }
	        
	    });

	});

	/*app.controller('scotchController', function($scope) {
    
	    $scope.message = 'test';
	   
	    $scope.scotches = [
	        {
	            name: 'Macallan 12',
	            price: 50
	        },
	        {
	            name: 'Chivas Regal Royal Salute',
	            price: 10000
	        },
	        {
	            name: 'Glenfiddich 1937',
	            price: 20000
	        }
	    ];
	    
	});*/

	return app;

});