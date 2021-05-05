const con = require("./props");

const createTables = () => {
    con.connect(function (err) {
        if (err) console.log("ERROR WITH MYSQL CONNECTION\n" + err);

        let sql = "CREATE TABLE IF NOT EXISTS categories (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255))";
        con.query(sql, function (err, result) {
            if (err) {
                console.log("CAN'T CREATE TABLE");
                console.log(err)
            }
            console.log("Table categories created");
        });

        sql = "CREATE TABLE IF NOT EXISTS posts (id INT AUTO_INCREMENT PRIMARY KEY, category_id INT, title VARCHAR(255))";

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

        sql = "CREATE TABLE IF NOT EXISTS actions (id INT AUTO_INCREMENT PRIMARY KEY, item_id INT, item_type VARCHAR(128), new_data VARCHAR(8000), prev_data VARCHAR(8000), is_active BOOLEAN)";
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