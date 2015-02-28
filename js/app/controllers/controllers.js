define(function(){
	var controllers = {
		customDialog : function ($scope, $mdDialog) {
  			$scope.hide = function() {
			    $mdDialog.hide();
			  };
			  $scope.cancel = function() {
			    $mdDialog.cancel();
			  };
			  $scope.answer = function(answer) {
			    $mdDialog.hide(answer);
			  };
		}
	};
	return controllers;
});