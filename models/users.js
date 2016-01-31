    "use strict";

var model = require("../core/model");

var obj = {    
    getAll: function(callback) {
        var collection = this.db.collection("test");
        collection.find().toArray(callback);
    },

    getUserBaseOnUsernameOrEmail: function(username, email, callback) {
        this.userCollection.find({
            $or:[
                {username: username},
                {email: email}
        ]}).toArray(callback);
    },

    addUser: function(data, callback) {        
        this.userCollection.insert({
            username: data.username,
            password: data.password,
            email: data.email
        }, {w:1}, function(err, records) {
            if(!err) {
                callback(apiResponse.buildResponse(true, "new record has been inserted successfully!"));
            }else{
                callback(apiResponse.buildResponse(false, err));
            }
        });
    }
};

_.extend(obj, model);

obj.userCollection = obj.db.collection("users");
/**
* user model here
**/
module.exports = obj;