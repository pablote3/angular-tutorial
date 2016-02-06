var myApp = angular
	.module("myModule", [])
	.controller("myController", function($scope) {
		var country = {
			name: "USA",
			capitol: "Washington, D.C.",
			flag: "../images/jerseys.png"
		};
		$scope.country = country;
});
