const mysql = require('mysql');

const mySqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'company',
    insecureAuth : true
});

mySqlConnection.connect((err) => {
    if(!err) console.log('DB Connection succeded !');
    else console.log('DB connection failed \n Error:-', err.sqlMessage);
});

module.exports = { mySqlConnection };