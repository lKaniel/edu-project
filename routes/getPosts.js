let express = require('express');
const {getPosts} = require("../core/db/postsController");
let router = express.Router();

router.get('/', function (req, res, next) {
    let a = getPosts().then(r => {
        res.send(r)
    })
});

module.exports = router;
