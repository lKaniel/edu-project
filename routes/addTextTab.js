let express = require('express');
const {addTab} = require("../core/db/tabsController");
let router = express.Router();

router.post('/', function (req, res, next) {
    let post_id = req.body.post_id;
    let type = 1;
    let data = req.body.text;
    addTab(post_id, type, data);
});

module.exports = router;
