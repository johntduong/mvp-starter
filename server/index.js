var express = require('express');
var request = require('request');
var urlPath;

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var items = require('../database-mysql');
//var items = require('../database-mongo');

var app = express();
var bodyParser = require('body-parser');

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));




app.post('/search', function(req, res) {
    urlPath = req.body.firstParam
    request(urlPath, function (error, response, body) {
	  if (!error && response.statusCode === 200) {
	  	items.addOne(urlPath, response.statusCode, console.log);
	    res.sendStatus(response.statusCode);
	  } else { 	
	  	res.sendStatus(404);
	  }
	})
});



app.listen(3000, function() {
  console.log('listening on port 3000!');
});

