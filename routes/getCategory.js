let express = require('express');
const {getPosts: getCategory} = require("../core/db/postsDBController");
let router = express.Router();

router.get('/', function (req, res, next) {
    if (req.query.id !== undefined) {
        getCategory(req.query.id).then(r => {
            res.send(r)
        })
    }else{
        res.send("ERROR");
    }
});

module.exports = router;
