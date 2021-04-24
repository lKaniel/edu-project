let express = require('express');
const {removeTab} = require("../core/db/tabsController");
let router = express.Router();

router.post('/', function (req, res, next) {
    let id = req.body.id;
    removeTab(id);
});

module.exports = router;
