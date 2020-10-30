// Dependencies
const mysql = require("mysql");

// connection parameters
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1410Wilno",
  database: "burgers_db"
});

// connection
connection.connect(function(err){
  if(err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;