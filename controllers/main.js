"use strict";
var coreController = require("../core/controller");

var mainController = function() {
    var self = this;
        
    this.getModel("users");
    
    this.getAll = function() {
        this.users.getAll(function(err,items){
            if(!err){
                view.assign("users", items);
                view.assign("title", "test");
                view.assign("message", "this is message from controller");     
                view.display("index");
            }else{
                response.end("some error happen on server!");
            } 
        });
    };

    this.addUser = function(){
        this.users.addUser(request.body, function(items){
            view.assign("users", items);
            view.display("users");
        });
    };

    this.welcome = function(){
        view.display("helloWorld");
    };
};

mainController.prototype = Object.create(coreController.prototype);
mainController.prototype.constructor = mainController;

module.exports = mainController;