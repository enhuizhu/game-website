"use strict";

angular.module("game").directive("register", function(validation) {
	return {
		restrict: "AE",
		replace: true,
		scope: {},
		templateUrl: "./views/register.html",
		link: function(scope, element, attr) {
			scope.form = {
				register: function() {
					console.info("register user");
				}, 

				validate: function() {

				},

				isValidEmail: function(isDom) {
					if (isDom && this.email === "") {
						return true;
					};
					
					return validation.isValidEmail(this.email)
				}
			}	
		}
	}	
});