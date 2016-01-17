"use strict";
// Retrieve
var MongoClient = require('mongodb').MongoClient;
// Connect to the db
MongoClient.connect("mongodb://localhost:27017/exampleDb", {native_parser:true}, function(err, db) {  
    if(!err){
    	console.log("db connect successfully!");
    	MongoClient.db = db;
    }else{
        console.log("connect to db fail, the error message is:",err);
    } 
});

module.exports = MongoClient;