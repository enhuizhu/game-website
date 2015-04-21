"use strict";
//var fs = require("fs");

exports.view = {
   
    data:{

    },

    assign: function(key,value){
        
       this.data[key] = value;

    },

    display : function(fileName, res){         
        
        res.render(fileName , this.data);

    }
    
}

