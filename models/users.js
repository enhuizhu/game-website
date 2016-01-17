"use strict";

var db = require("../configs/dbConfig");

var obj = {
    db: db.db,
    
    getAll: function(callback) {
        var collection = this.db.collection("test");
        collection.find().toArray(callback);
    },

    addUser: function(data, callback) {
        var collection = this.db.collection("users");

        collection.insert({
            username: data.username,
            password: data.password
        }, {w:1}, function(err, records) {
            if(!err) {
                console.log("records has been added successfully!");
                collection.find().toArray(function(err,items){
                  console.log("all the items are:",items);
                  callback(items);
                });
            }else{
              

            }
        });
    }
};
/**
* user model here
**/
module.exports = obj;
