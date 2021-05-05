const con = require("./props");

const addGroup = (title) => {
    return new Promise(function (resolve, reject) {
        const sql = `INSERT INTO groups (title) VALUES ("${title}")`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(true);
        });
    });
};

const removeGroup = (id) => {
    return new Promise(function (resolve, reject) {
        const sql = `DELETE FROM group WHERE id = ${id}`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(true);
        });
    })
};

const editGroup = (id, title) => {
    return new Promise(function (resolve, reject) {
        const sql = `UPDATE groups set title = "${title}" WHERE id = ${id}`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(true);
        });
    });
};

const getGroups = (value) => {
    return new Promise(function (resolve, reject) {
        const sql = `SELECT * FROM groups WHERE title LIKE "%${value}%"`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            let groups = [];
            if (result === undefined) resolve(groups);
            for (let i = 0; i < result.length; i++) {
                let sqlPost = result[i];
                let group = {
                    id: sqlPost.id,
                    title: sqlPost.title
                };
                groups.push(group)
            }
            resolve(groups);
        });
    })
};


module.exports = {
    addGroup,
    editGroup,
    removeGroup,
    getGroups
};