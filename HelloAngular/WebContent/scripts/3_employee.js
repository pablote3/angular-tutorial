var myApp = angular
	.module("myModule", [])
	.controller("myController", function($scope) {
		var employee = {
			firstName: "David",
			lastName: "Hastings", 
			gender: "Male"
	};
	$scope.employee = employee;
});
