const {getPostById} = require("../db/postsDBController");
const {getPostId} = require("../db/postsDBController");
const {addPost} = require("../db/postsDBController");
const {addAction} = require("../db/actionsDBController");


const createPost = async (category_id, title) => {
    await addPost(category_id, title);
    const id = await getPostId(category_id, title);
    await addAction(id, "post", title, null);
}

const removePost = async (id) => {
    const {removePost} = require("../db/postsDBController");
    await removePost(id);
    const title = await getPostById(id);
    await addAction(id, "post", null, title);
}

const editPost = async (id, title) => {
    const {editPost} = require("../db/postsDBController");
    await editPost(id, title);
    const old_title = await getPostById(id);
    await addAction(id, "post", title, old_title);
}

module.exports =
    {
        createPost,
        removePost,
        editPost
    }