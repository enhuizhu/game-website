"use strict";

module.exports = {
    data:{},

    assign: function(key,value){
        this.data[key] = value;
    },

    display : function(fileName, res){         
       	response.render(fileName , this.data);
    }
}

