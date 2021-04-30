const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Wy?T*wN~pm%dfSp5Epzsa",
    port: 3306,
    // insecureAuth : true,
    database: "edu_project"

});

module.exports = con;