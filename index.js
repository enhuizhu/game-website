var bodyParser = require("body-parser");
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(function(req, res, next) {
  var contentType = req.headers['content-type'] || ''
    , mime = contentType.split(';')[0];

  if (mime != 'text/plain') {
    return next();
  }

  var data = '';
  req.setEncoding('utf8');
  req.on('data', function(chunk) {
    data += chunk;
  });
  req.on('end', function() {
    req.rawBody = data;
    next();
  });
});

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(bodyParser.raw());

app.set("views",__dirname + "/views");
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'))


/**
* start db connection
**/
var mogodb = require("./configs/dbConfig.js").db;

/**
* start view
**/

var view = require("./view.js").view;


/**
* start route
**/
require("./routes/route.js").init(app,mogodb,view);

app.listen(3000);




