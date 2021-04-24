const con = require("./props");

const addPost = (title) => {
    return new Promise(function (resolve, reject) {
        const sql = `INSERT INTO posts (title) VALUES ("${title}")`;
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

const getPosts = () => {
    return new Promise(function (resolve, reject) {
        const sql = `SELECT * FROM posts`;
        con.query(sql, function (err, result) {
            if (err) {
                reject(err);
            }
            let posts = [];
            if (result === undefined) resolve(posts);
            for (let i = 0; i < result.length; i++) {
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