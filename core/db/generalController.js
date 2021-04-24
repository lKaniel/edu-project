const con = require("./props");

const createTables = () => {
    con.connect(function (err) {
        if (err) console.log("ERROR WITH MYSQL CONNECTION\n" + err);
        const sql = "CREATE TABLE IF NOT EXISTS posts (" +
            "id INT AUTO_INCREMENT PRIMARY KEY, " +
            "title VARCHAR(255), " +
            ")";

        con.query(sql, function (err, result) {
            if (err) console.log("CAN'T CREATE TABLE");
            console.log("Table posts created");
        });

        const sql2 = "CREATE TABLE IF NOT EXISTS tabs (" +
            "id INT AUTO_INCREMENT PRIMARY KEY, " +
            "post_id INT, " +
            "type INT, " +
            "data VARCHAR(max), " +
            ")";
        con.query(sql2, function (err, result) {
            if (err) console.log("CAN'T CREATE TABLE");
            console.log("Table tabs created");
        });
    });
};

module.exports = {
    createTables
};