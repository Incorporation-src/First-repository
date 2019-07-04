var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mybase'
});
 
connection.connect();
 
connection.query("SELECT age  FROM cat WHERE id=4",function (error, results, fields) {
  if (error) throw error;
  console.log('age cat: ', results[0].age);
});
 
connection.end();