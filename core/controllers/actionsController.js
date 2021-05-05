const {undoCancelLastAction} = require("../db/actionsDBController");
const {cancelLastAction} = require("../db/actionsDBController");


const undoAction = async ()=>{
    await cancelLastAction()
}

const cancelUndo = async ()=>{
    await undoCancelLastAction();
}

module.exports = {
    undoAction,
    cancelUndo
}