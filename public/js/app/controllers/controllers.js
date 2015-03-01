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
		},

		homeController:function($scope){
			$scope.categories = [
				{name:"Category 1", questions:"6"},
				{name:"Category 2", questions:"61"},
				{name:"Category 3", questions:"36"},
				{name:"Category 4", questions:"12"},
				{name:"Category 5", questions:"65"},
				{name:"Category 6", questions:"84"},
				{name:"Category 7", questions:"94"},
				{name:"Category 8", questions:"43"},
				{name:"Category 9", questions:"2"},
				{name:"Category 10", questions:"31"}
			];
		}
	};
	return controllers;
});