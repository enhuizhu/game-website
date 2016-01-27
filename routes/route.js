/**
* all the route will be here
**/
module.exports = function(app){
	var controllers = {};
	
	function response( obj, req, res ){
		if( typeof controllers[ obj.controller ] == 'undefined' ) {
			controllers[ obj.controller ] = require("../controllers/" + obj.controller +  ".js");
			controllers[ obj.controller ] = new controllers[obj.controller]();	
		}
		
		controllers[obj.controller][obj.action]();
	}
	
	app.get('/', function(req, res) {
	    view.display("index",res);
	});

	app.get('/api',function(req,res){
		response({
			controller: 'main',
			action: 'getAll'
		}, req, res );
	});

    app.post('/api',function(req,res){
        response({
            controller:'main',
            action : 'addUser'
        },req,res);
    });	

	app.get('/api2',function(req,res){
		response({
			controller: 'main',
			action: 'welcome'
		}, req, res);
	});
}