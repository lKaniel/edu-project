let express = require('express');
const {getTabsForPost} = require("../core/db/tabsController");
let router = express.Router();

router.get('/', function (req, res, next) {
    if (req.query.id !== undefined){
        res.send(getTabsForPost(req.query.id));
    }else{
        res.send("ERROR");
    }
});

module.exports = router;
