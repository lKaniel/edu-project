const con = require("./props");

const addTab = (post_id, type, data) => {
    return new Promise(function (resolve, reject) {
        const sql = `INSERT INTO tabs (post_id, type, data) VALUES (${post_id}, ${type}, "${data}")`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(true);
        });
    });
};

const removeTab = (id) => {
    return new Promise(function (resolve, reject) {
        const sql = `DELETE FROM tabs WHERE id = ${id}`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(true);
        });
    })
};

const editTab = (id, data) => {
    return new Promise(function (resolve, reject) {
        const sql = `UPDATE posts set data = "${data}" WHERE id = ${id}`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(true);
        });
    })
};

const getTabId = (post_id, data) => {
    return new Promise(function (resolve, reject) {
        const sql = `SELECT * FROM tabs WHERE data = ${data} AND post_id = ${post_id} ORDER BY id DESC LIMIT 1`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            if (result === undefined) resolve(null);
            for (let i = 0; i < result?.length; i++) {
                let sqlPost = result[i];
                resolve(sqlPost.id);
            }
            resolve(null);
        });
    });

}

const getTabById = (id) => {
    return new Promise(function (resolve, reject) {
        const sql = `SELECT * FROM tabs WHERE id = ${id} ORDER BY id DESC LIMIT 1`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            if (result === undefined) resolve(null);
            for (let i = 0; i < result?.length; i++) {
                let sqlPost = result[i];
                resolve(sqlPost.data);
            }
            resolve(null);
        });
    });

}

const getTabsForPost = (id) => {
    return new Promise(function (resolve, reject) {
        const sql = `SELECT * FROM tabs WHERE post_id = ${id};`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            let tabs = [];
            if (result === undefined) resolve(tabs);
            for (let i = 0; i < result.length; i++) {
                let sqlPost = result[i];
                let tab = {
                    id: sqlPost.id,
                    post_id: sqlPost.post_id,
                    type: sqlPost.type,
                    data: sqlPost.data
                };
                tabs.push(tab)
            }
            resolve(tabs);
        });
    })
};


module.exports = {
    addTab,
    removeTab,
    editTab,
    getTabId,
    getTabById,
    getTabsForPost
};