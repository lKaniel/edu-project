let express = require('express');
const {getTabsForPost} = require("../core/db/tabsController");
let router = express.Router();

router.get('/', function (req, res, next) {
    if (req.query.id !== undefined) {

        getTabsForPost(req.query.id).then(r => res.send(r));
    } else {
        res.send("ERROR");
    }
});

module.exports = router;
