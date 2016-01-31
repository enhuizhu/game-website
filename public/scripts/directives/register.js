"use strict";

angular.module("game").directive("register", function(validation, api) {
	return {
		restrict: "AE",
		replace: true,
		scope: {
			registerCallback: "="
		},
		templateUrl: "./views/register.html",
		link: function(scope, element, attr) {
			scope.form = {
				register: function() {
					if (!this.isValiForm()) {
						this.error = "invalid form data";
						return false;
					};

					var _this = this;

					api.registerUser({
						email: this.email,
						username: this.username,
						password: this.password,
					}).then(function(data, status) {
						console.info("the response is:", data, status);
						if (data.data.success) {
							_this.success = data.data.msg;
							_this.resetForm();
							scope.registerCallback(data.data)
						}else{
							_this.error = data.data.msg;
						}
					}).catch(function(e) {	
						_this.error = "server error!";
					});
				},

				resetForm: function() {
					this.email = "";
					this.username = "";
					this.password = "";
					this.confirmPassword = "";
				},

				closeErrorAlert: function() {
					this.error = "";
				},

				closeSuccessAlert: function() {
					this.success = "";
				},

				isValiForm: function() {
					var condition = this.isValidEmail() && this.isValidUserName()
						&& this.isValidPassword() && this.isValidConfrimPassword();

					return condition;
				},

				isValidEmail: function(isDom) {
					if (isDom && (this.email === "" || this.email === undefined)) {
						this.emailError = "";
						return true;
					};

					var isValid = validation.isValidEmail(this.email);

					if (!isValid) {
						this.emailError = "invalid Email address";
					}else{
						this.emailError = "";
					}
					
					return isValid;
				},

				isValidUserName: function(isDom) {
					if (isDom && (this.username === "" || this.username === undefined)) {
						this.usernameError = "";
						return true;
					};
					
					var validObj = validation.isValidStr(this.username, {
						required: true,
						min: 6,
						alpha: true,
						max: 20
					});

					if (validObj.isValid) {
						this.usernameError = "";
					}else{
						this.usernameError = validObj.msg.replace("s%", "username");
					}

					return validObj.isValid;
				},

				isValidPassword: function(isDom) {
					if (isDom && (this.password === "" || this.password === undefined)) {
						this.pwdError = "";
						return true;
					};
					
					var validObj = validation.isValidStr(this.password, {
						required: true,
						min: 6,
						alpha: true,
						number: true,
						max: 20
					});

					if (validObj.isValid) {
						this.pwdError = "";
					}else{
						this.pwdError = validObj.msg.replace("s%", "password");
					}

					return validObj.isValid;
				},

				isValidConfrimPassword: function(isDom) {
					if (isDom && (this.confirmPassword === "" || this.confirmPassword === undefined)) {
						this.cfmPwdError = "";
						return true;
					};

					if (this.confirmPassword != this.password) {
						this.cfmPwdError = "passwords not match!";
						return false;
					}else{
						this.cfmPwdError = "";
						return true;
					}
				}
			}	
		}
	}	
});