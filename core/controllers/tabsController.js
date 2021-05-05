const {getTabId} = require("../db/tabsDBController");
const {getTabById} = require("../db/tabsDBController");
const {addTab} = require("../db/tabsDBController");
const {addAction} = require("../db/actionsDBController");


const createTab = async (post_id, type, data) => {
    await addTab(post_id, type, data);
    const id = await getTabId(post_id, data);
    await addAction(id, "tabs", data, null);
}

const removeTab = async (id) => {
    const {removeTab} = require("../db/tabsDBController");
    await removeTab(id);
    const data = await getTabById(id);
    await addAction(id, "tabs", null, data);
}

const editTab = async (id, data) => {
    const {editTab} = require("../db/tabsDBController");
    await editTab(id, data);
    const old_data = await getTabById(id);
    await addAction(id, "tabs", data, old_data);
}

module.exports =
    {
        createTab,
        removeTab,
        editTab
    }