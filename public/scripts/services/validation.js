"use strict";

angular.module("game").service("validation", function() {
	/**
	* function to check if it's valid email
	**/
	this.isValidEmail = function(email) {
		return /.+@.+/.test(email);
	};

	/**
	* function to check if it's valid string
	**/
	this.isValidStr = function(input, config) {

	}
});