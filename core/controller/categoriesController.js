const {addAction} = require("../db/actionsDBController");
const {getCategoryById} = require("../db/categoriesDBController");
const {addCategory} = require("../db/categoriesDBController");
const {getCategoryId} = require("../db/categoriesDBController");


const createCategory = async (title) => {
    await addCategory(title);
    const id = await getCategoryId(title);
    await addAction(id, "category", title, null);
}

const removeCategory = async (id) => {
    const {removeCategory} = require("../db/categoriesDBController");
    await removeCategory(id);
    const title = await getCategoryById(id);
    await addAction(id, "category", null, title);
}

const editCategory = async (id, title) => {
    const {editCategory} = require("../db/categoriesDBController");
    await editCategory(id, title);
    const old_title = await getCategoryById(id);
    await addAction(id, "category", title, old_title);
}

module.exports =
{
    createCategory,
    removeCategory,
    editCategory
}