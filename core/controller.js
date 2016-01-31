"use strict";
/**
* all the shared function for controllers will be here,
* should put view here and assign it to controller objct
**/
var controller = function() {};

controller.prototype.view = require("../core/view");

controller.prototype.getModel = function(modelName) {
	this[modelName] = require("../models/" + modelName + ".js");
};

module.exports = controller;