"use strict";
var coreController = require("../core/controller");

var userController = function() {
    var self = this;
        
    this.getModel("users");
    
    this.addUser = function(){
        /**
        * should check if the user already in the dababase
        **/
        this.users.getUserBaseOnUsernameOrEmail(request.body.username, request.body.email, function(err, users) {
            if (err) {
                response.send(apiResponse.buildResponse(false, err));
                return false;
            };

            if (users.length) {
                response.send(apiResponse.buildResponse(false, "username or email already exist in the system"));
                return false;
            };

            self.users.addUser(request.body, function(res){
                response.send(res);
            });
        });
    };
};

userController.prototype = Object.create(coreController.prototype);
userController.prototype.constructor = userController;

module.exports = userController;