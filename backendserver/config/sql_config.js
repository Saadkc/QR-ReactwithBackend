const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',//Your own password
  database: ''//Your own database name
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});


module.exports = connection;