const  mysql = require('mysql');
require('dotenv').config();
const  connection = mysql.createConnection({
host :  'localhost', // address of the server
user :  process.env.DB_USER, // username
password :  process.env.DB_PASS,
database :  'motivacional_quotes',
});


module.exports=connection;
