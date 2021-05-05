const con = require("./props");

const addAction = (item_id, item_type, new_data, prev_data) => {
    return new Promise(function (resolve, reject) {
        const sql = `INSERT INTO actions (item_id, item_type, new_data, prev_data, action, is_active) VALUES (${item_id}, "${item_type}", "${new_data}", "${prev_data}", true)`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(true);
        });
    });
};

const cancelLastAction = (item_id, item_type) => {
    return new Promise(function (resolve, reject) {
        const sql = `UPDATE actions set is_active = false WHERE item_id = ${item_id} AND item_type = ${item_type} AND action = true ORDER BY id DESC LIMIT 1`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(true);
        });
    });

};

const undoCancelLastAction = (item_id, item_type) => {
    return new Promise(function (resolve, reject) {
        const sql = `UPDATE actions set is_active = true WHERE item_id = ${item_id} AND item_type = ${item_type} AND action = false ORDER BY id ASC LIMIT 1`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(true);
        });
    });

};

const clearActons = () => {
    return new Promise(function (resolve, reject) {
        const sql = `DELETE FROM actions WHERE is_active = false`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(true);
        });
    });

}



module.exports = {
    addAction,
    cancelLastAction,
    undoCancelLastAction,
    clearActons
};