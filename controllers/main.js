"use strict";



exports.init = function(db,view){

   var userModel =  require("../models/users").init(db);
   
   return {
       getAll : function(req,resp){

	       	  userModel.getAll(function(err,items){

			     if(!err){
			     	view.assign("users",items);
			     	view.assign("title","test");
			        view.assign("message","this is message from controller");     
			        view.display("index",resp);
			     }else{
			     	resp.end("some error happen on server!");
			     }
			     
	        });
       },

       addUser : function(req,resp){
            
            


            console.log(req.body);

            userModel.addUser(req.body,function(){

            });


 

       },

       welcome : function(req,resp){
          
           view.display("helloWorld",resp);

       }

   }

}



 






