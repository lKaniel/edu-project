let express = require('express');
const {removeTab} = require("../core/db/tabsDBController");
let router = express.Router();

router.post('/', function (req, res, next) {
    let id = req.body.id;
    removeTab(id).then(r => {res.send("removed")});
});

module.exports = router;
