require.config({
	baseUrl:'js',
	paths:{
		lib:'/lib',
		angular:'lib/angular.min',
		angularRoute:'lib/angular-route.min',
		jquery:'lib/jquery-2.1.3.min',
		bootstrap:'lib/bootstrap/js/bootstrap.min',
		uiRouter:'lib/angular-ui-router.min',
		angularAnimate:'lib/angular-animate.min',
		angularAria:'lib/angular-aria.min',
		angularMaterial:'lib/angular-material.min',
		controllers:'app/controllers'
	},
	shim:{
		
		angular:{
			exports:'angular'
		},
		
		jquery:{
			exports:'jquery'
		},
		
		angularAnimate:{
			exports:'angularAnimate'
		},
		
		angularAria:{
			exports:'angularAria'
		},
		
		angularRoute:{
			deps:['angular'],
			exports:'angularRoute'
		},
		
		uiRouter:{
			deps:['angular'],
			exports:'uiRouter'
		},
		
		angularMaterial:{
			deps:['angularAnimate','angularAria'],
			exports:'angularMaterial'
		}
	}
});

requirejs(['angular','uiRouter','app','angularMaterial'],function(){
	angular.bootstrap(document,['seed']);
});