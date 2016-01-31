"use strict";

angular.module("game").controller("main", function($scope) {
	console.info("main controller");
	var controller = function($scope) {
		this.$ = $scope;
		
		this.$.registerCallback = function(response) {
		}
	}

	return new controller($scope);
});