var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8888;
const https = require('https');
const contollerUrl = require('./controller.js').contollerUrl,
		controllerUrl = require('./controller.js').controllerUrl;

app.get('/', function (req, res, next) {
	contollerUrl();
 res.sendFile( __dirname + '/index.html');
});
app.use(bodyParser.json());
app.set('views',__dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.listen(port, '0.0.0.0', function() {
 console.log('Server running at port ' + port);
});

app.get("/test", function(req, res) {
    // if you chose to send data as a query in the URL
    console.log(req.query.q);
    // if you chose to send data as JSON
    console.log(req.body.q);
 	
    // finally, respond to the client
    res.send("Okay");
});


