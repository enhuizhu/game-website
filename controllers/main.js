"use strict";
var coreController = require("../core/controller");

var mainController = function(req, resp) {
    var self = this;
    
    this.req = req;
    this.resp = resp;
    
    this.getModel("users");
    
    this.getAll = function() {
        this.users.getAll(function(err,items){
            if(!err){
                self.view.assign("users", items);
                self.view.assign("title", "test");
                self.view.assign("message", "this is message from controller");     
                self.view.display("index", self.resp);
            }else{
                self.resp.end("some error happen on server!");
            } 
        });
    };

    this.addUser = function(){
        this.users.addUser(this.req.body,function(items){
            self.view.assign("users", items);
            self.view.display("users", self.resp);
        });
    };

    this.welcome = function(){
        this.view.display("helloWorld", this.resp);
    };
};

mainController.prototype = Object.create(coreController.prototype);
mainController.prototype.constructor = mainController;

module.exports = mainController;