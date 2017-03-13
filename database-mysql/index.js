var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'history'
});

connection.connect(function(err) {
  if (err) {
    console.log(err);
  }
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM websites', function(err, rows) {
    callback(err, rows);
  });
};

var addOne = function(url, statusCode, callback) {
  connection.query('INSERT INTO websites SET url = ?, status = ?', [url, statusCode], function(err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};


module.exports.selectAll = selectAll;
module.exports.addOne = addOne;