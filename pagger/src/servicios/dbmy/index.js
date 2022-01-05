const mysql = require('mysql2');
require('dotenv').config()
// create the connection to database
const dbmy = mysql.createConnection({
    host: process.env.DB_MYSQL_HOST,
    user: process.env.DB_MYSQL_USER,
    password: process.env.DB_MYSQL_PASSWORD,
    database: process.env.DB_MYSQL_DATABASE
});

dbmy.connect(function (err) {
    if (err) {
        //console.log(err);
        console.log("Error de conexion Mysql");
        return;
    }
    else {
        console.log("Base de datos Mysql Conectada");
    }
});

module.exports=dbmy;
