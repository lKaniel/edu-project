const con = require("./props");

const addPost = (category_id, title) => {
    return new Promise(function (resolve, reject) {
        const sql = `INSERT INTO posts (title, category_id) VALUES ("${title}", ${category_id})`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(true);
        });
    });
};

const removePost = (id) => {
    return new Promise(function (resolve, reject) {
        const sql = `DELETE FROM posts WHERE id = ${id}`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            resolve(true);
        });
    });
};

const getPosts = (category_id) => {
    return new Promise(function (resolve, reject) {
        const sql = `SELECT * FROM posts WHERE group_id = "${category_id}"`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            let posts = [];
            for (let i = 0; i < result?.length; i++) {
                let sqlPost = result[i];
                let post = {
                    id: sqlPost.id,
                    title: sqlPost.title
                };
                posts.push(post)
            }
            resolve(posts);
        });
    })
};



module.exports = {
    addPost,
    removePost,
    getPosts
};