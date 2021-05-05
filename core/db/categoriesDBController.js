const con = require("./props");

const addCategory = (title) => {
    return new Promise(function (resolve, reject) {
        const sql = `INSERT INTO categories (title) VALUES ("${title}")`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(true);
        });
    });
};

const removeCategory = (id) => {
    return new Promise(function (resolve, reject) {
        const sql = `DELETE FROM categories WHERE id = ${id}`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(true);
        });
    })
};

const editCategory = (id, title) => {
    return new Promise(function (resolve, reject) {
        const sql = `UPDATE categories set title = "${title}" WHERE id = ${id}`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(true);
        });
    });
};

const getCategoryId = (title) => {
    return new Promise(function (resolve, reject) {
        const sql = `SELECT * FROM categories WHERE title = ${title} ORDER BY id DESC LIMIT 1`;
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

const getCategoryById = (id) => {
    return new Promise(function (resolve, reject) {
        const sql = `SELECT * FROM categories WHERE id = ${id} ORDER BY id DESC LIMIT 1`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            if (result === undefined) resolve(null);
            for (let i = 0; i < result?.length; i++) {
                let sqlPost = result[i];
                resolve(sqlPost.title);
            }
            resolve(null);
        });
    });

}

const getCategories = (value) => {
    return new Promise(function (resolve, reject) {
        const sql = `SELECT * FROM categories WHERE title LIKE "%${value}%"`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            let categories = [];
            if (result === undefined) resolve(categories);
            for (let i = 0; i < result?.length; i++) {
                let sqlPost = result[i];
                let group = {
                    id: sqlPost.id,
                    title: sqlPost.title
                };
                categories.push(group)
            }
            resolve(categories);
        });
    })
};


module.exports = {
    addCategory,
    editCategory,
    removeCategory,
    getCategories,
    getCategoryId,
    getCategoryById
};