var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require("client-sessions");
/**
* should init the db at the very begining, otherwise
* in the user model can have the situation that db is 
* not defined
**/
var mongoDb = require("./configs/dbConfig");

_ = require("underscore");

app.use(session({
    cookieName: 'session',
    secret: 'eg[isfd-8yF9-7w2315df{}+Ijsli;;to8',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
    httpOnly: true,
    ephemeral: true
}));

app.use(function(req, res, next) {
    if (req.session) {
        if (!req.session.visit) {
            req.session.visit = 0;
        };

        req.session.visit ++;
        console.info("you already visit website:" + req.session.visit);
    }else{
        console.error("session is not defined!");
    }

    var contentType = req.headers['content-type'] || '', 
        mime = contentType.split(';')[0];

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

app.use(bodyParser.json());// to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(bodyParser.raw());

app.set("views", __dirname + "/views");
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
/**
* start route
**/
require("./routes/route.js")(app);
app.listen(3000);