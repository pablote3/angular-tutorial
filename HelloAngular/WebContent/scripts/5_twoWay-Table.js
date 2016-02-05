var myApp = angular
	.module("myModule", [])
	.controller("myController", function($scope) {
		var employee = {
			firstName: "Tony",
			lastName: "Saprano",
			gender: "Male"
		};
		$scope.employee = employee;
});
