"use strict";
 var userModel =  require("../models/users"),
     view = require("../view");

module.exports = {
    getAll: function(req,resp){
       userModel.getAll(function(err,items){
       
       if(!err){
          view.assign("users", items);
          view.assign("title", "test");
          view.assign("message", "this is message from controller");     
          view.display("index", resp);
       }else{
          resp.end("some error happen on server!");
       } 
      });
    },

    addUser: function(req,resp){
        console.log(req.body);
        userModel.addUser(req.body,function(items){
            view.assign("users", items);
            view.display("users", resp);
        });
    },

    welcome: function(req,resp){
       view.display("helloWorld", resp);
    }
}
