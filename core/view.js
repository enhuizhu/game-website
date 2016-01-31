"use strict";

module.exports = {
    data:{},

    assign: function(key,value){
        this.data[key] = value;
    },

    display : function(fileName){         
       	response.render(fileName , this.data);
    }
}

