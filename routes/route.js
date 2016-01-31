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
	    var url = require("../modules/url");
	    view.assign("api", url.getBaseUrl(req));
	    view.display("index");
	});

	app.post("/addUser", function(req, res) {
		response({
			controller: "user",
			action: "addUser"
		});
	});

	app.get('/api',function(req,res){
		response({
			controller: 'main',
			action: 'getAll'
		});
	});

    app.post('/api',function(req,res){
        response({
            controller:'main',
            action : 'addUser'
        });
    });	

	app.get('/api2',function(req,res){
		response({
			controller: 'main',
			action: 'welcome'
		});
	});
}