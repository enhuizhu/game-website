"use strict";

/**
* user model here
**/
exports.init = function(db){

    this.initDb = function(){
    	if(!this.db) this.db = db.db;
    }
    
    this.getAll = function(callback){
       this.initDb();	
       var collection = this.db.collection("test");
       collection.find().toArray(callback);
    }

    this.addUser = function(data,callback){
       
       var collection = this.db.collection("users");
       
       collection.insert({
       	  username:data.username,
       	  password:data.password
         },{w:1},function(err,records){
          
          if(!err) {
          	console.log("records has been added successfully!");
          	collection.find().toArray(function(err,items){
          		console.log("all the items are:",items);
          	});
          }else{
          	






          }


       });
    
    }


    return this;

}