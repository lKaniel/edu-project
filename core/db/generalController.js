const con = require("./props");

const createTables = () => {
    con.connect(function (err) {
        if (err) console.log("ERROR WITH MYSQL CONNECTION\n" + err);

        let sql = "CREATE TABLE IF NOT EXISTS groups (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255))";
        con.query(sql, function (err, result) {
            if (err) {
                console.log("CAN'T CREATE TABLE");
                console.log(err)
            }
            console.log("Table groups created");
        });

        sql = "CREATE TABLE IF NOT EXISTS posts (id INT AUTO_INCREMENT PRIMARY KEY, group_id INT, title VARCHAR(255))";

        con.query(sql, function (err, result) {
            if (err) {
                console.log("CAN'T CREATE TABLE");
                console.log(err)
            }
            console.log("Table posts created");
        });

        sql = "CREATE TABLE IF NOT EXISTS tabs (id INT AUTO_INCREMENT PRIMARY KEY, post_id INT, type INT, data VARCHAR(8000))";
        con.query(sql, function (err, result) {
            if (err) {
                console.log("CAN'T CREATE TABLE");
                console.log(err)
            }
            console.log("Table tabs created");
        });

        sql = "CREATE TABLE IF NOT EXISTS actions (id INT AUTO_INCREMENT PRIMARY KEY, tab_id INT, new_data VARCHAR(8000), prev_data VARCHAR(8000), action VARCHAR(128), is_active BOOLEAN)";
        con.query(sql, function (err, result) {
            if (err) {
                console.log("CAN'T CREATE TABLE");
                console.log(err)
            }
            console.log("Table actions created");
        });
    });
};

module.exports = {
    createTables
};