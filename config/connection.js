// set up MySQL connection
require('dotenv').config();
var mysql = require("mysql");

// connect to MySQL through JAWSDB or directly to MySQL
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: process.env.DB_HOST,
    user: "escbf4y7b9i1lkw8",
    password: process.env.DB_PASS,
    database: "hu43zao1ru6f5lj5"
  });
}

// make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// export connection
module.exports = connection;