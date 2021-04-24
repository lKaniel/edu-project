const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Wy?T*wN~pm%dfSp5Epzsa",
    port: 3306,
    // insecureAuth : true,
    database: "edu-project"

});

module.exports = con;