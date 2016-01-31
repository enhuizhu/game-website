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
		var obj = {
			isValid: true,
			msg: "s% is valid"
		}

		if(config && config.required && input === "") {
			obj.isValid = false;
			obj.msg = "s% can not be empty";
			return obj;
		};

		if (config && config.alpha && !/[a-z|A-Z]/.test(input)) {
			obj.isValid = false;
			obj.msg = "s% must contains letters";
		};

		if (config && config.number && !/[0-9]/.test(input)) {
			obj.isValid = false;
			obj.msg = "s% must contains numbers";
		};

		/**
		* check if the length of input is valud
		**/
		if (config && config.min && typeof config.min === "number" && input.length < config.min) {
			obj.isValid = false;
			obj.msg = "the length of s% can not be less then " + config.min;
			return obj;
		};

		if (config && config.max && typeof config.max === "number" && input.length > config.max) {
			obj.isValid = false;
			obj.msg = "the length of s% can not be greater then " + config.max;
			return obj;
		};

		if (config && config.mix === true && (!/[a-z|[A-Z]/.test(input) || !/[0-9]/.test(input))) {
			obj.isValid = false;
			obj.msg = "s% must contains letters and numbers";
			return obj;
		};

		return obj;
	}
});