define(function(require){

	var controllers = require('./controllers');

	return function($scope, $mdDialog) {
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
		$scope.showDialog = function(ev){
			$mdDialog.show(
			     $mdDialog.alert()
			     .title('This is an alert title')
			     .content('You can specify some description text in here.')
			     .ariaLabel('Password notification')
			     .ok('Got it!')
			     .targetEvent(ev)
		    );
		};

		$scope.showAdvanced = function(ev) {
			$mdDialog.show({
				controller: controllers.customDialog,
				templateUrl: 'templates/custom-dialog.html',
				targetEvent: ev,
			})
			.then(function(answer) {
				$scope.alert = 'You said the information was "' + answer + '".';
			}, function() {
				$scope.alert = 'You cancelled the dialog.';
			});
		};
	}
});