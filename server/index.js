var express = require('express');
var request = require('request');
var urlPath;

var db = require('../database-mysql');

var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'x-parse-application-id, x-parse-rest-api-key, content-type, accept',
  'access-control-max-age': 10,
  'Content-Type': 'application/json'
};

app.get('/return', function(req, res) {
  db.selectAll(function(err, results) {
    if (err) { 
    } else {
      console.log(results);
      res.json(results);
    }
  });
});

app.post('/search', function(req, res) {
    urlPath = req.body.firstParam
    request(urlPath, function (error, response, body) {
	  if (!error && response.statusCode === 200) {
	  	db.addOne(urlPath, response.statusCode, console.log);
	    res.sendStatus(response.statusCode);
	  } else { 	
	  	res.sendStatus(404);
	  }
	})
});

// app.post('/search', function(req, res) {
//     urlPath = req.body.firstParam
//     request(urlPath, function (error, response, body) {
// 	  if (!error && response.statusCode === 200) {
// 	  	db.addOne(urlPath, response.statusCode, console.log);
// 	    res.sendStatus(response.statusCode);
// 	  } else { 	
// 	  	res.sendStatus(404);
// 	  }
// 	})
// });



app.listen(3000, function() {
  console.log('listening on port 3000!');
});

