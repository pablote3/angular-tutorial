var myApp = angular
	.module("myModule", [])
	.controller("myController", function($scope, $http, $log) {
		
		var successCallBack = function(response) {
			$scope.employees = response.data;
		}
		
		var errorCallBack = function(reason) {
			$scope.error = reason.data;
		}
		
		$http({
			method: "GET",
			url: 'EmployeeService.asmx/GetAllEmployees'})
			.then(successCallBack,  errorCallBack);
	});