"use strict";

angular.module("game").service("api", function($http) {
	this.buildPath = function(apiPath) {
		return app.api + "/" + apiPath;
	};
	
	this.registerUser = function(userData) {
		return $http.post(this.buildPath("addUser"), userData);
	};
});